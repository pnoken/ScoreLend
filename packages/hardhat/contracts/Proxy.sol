// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Proxy Contract implementing EIP-1967
abstract contract Proxy {
	// Events
	event ProxyImplementationUpdated(
		address indexed previousImplementation,
		address indexed newImplementation
	);

	// Fallback function
	receive() external payable virtual {
		revert("ETHER_REJECTED"); // Explicitly reject Ether transfers by default
	}

	fallback() external payable {
		_fallback();
	}

	// Internal fallback mechanism
	function _fallback() internal {
		address implementationAddress = _getImplementation();
		assembly {
			// Copy msg.data to memory starting at position 0
			calldatacopy(0x0, 0x0, calldatasize())
			// Delegatecall to the implementation
			let success := delegatecall(
				gas(),
				implementationAddress,
				0x0,
				calldatasize(),
				0,
				0
			)
			// Retrieve the size of the returned data
			let retSz := returndatasize()
			// Copy the returned data to memory
			returndatacopy(0, 0, retSz)
			// Handle success or failure
			switch success
			case 0 {
				revert(0, retSz)
			}
			default {
				return(0, retSz)
			}
		}
	}

	// Internal function to set implementation
	function _setImplementation(
		address newImplementation,
		bytes memory data
	) internal {
		address previousImplementation = _getImplementation();

		assembly {
			sstore(
				0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc,
				newImplementation
			)
		}

		emit ProxyImplementationUpdated(
			previousImplementation,
			newImplementation
		);

		if (data.length > 0) {
			(bool success, ) = newImplementation.delegatecall(data);
			require(success, "Initialization Failed");
		}
	}

	// Internal function to get implementation address
	function _getImplementation()
		internal
		view
		returns (address implementationAddress)
	{
		assembly {
			implementationAddress := sload(
				0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc
			)
		}
	}
}
