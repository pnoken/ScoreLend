// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Proxy.sol";

interface ERC165 {
	function supportsInterface(bytes4 id) external view returns (bool);
}

/// @notice Proxy implementing EIP173 for ownership management
contract EIP173Proxy is Proxy {
	// Events
	event OwnershipTransferred(
		address indexed previousOwner,
		address indexed newOwner
	);

	// Constructor
	constructor(
		address implementationAddress,
		address ownerAddress,
		bytes memory data
	) payable {
		_setImplementation(implementationAddress, data);
		_setOwner(ownerAddress);
	}

	// External functions
	function owner() external view returns (address) {
		return _owner();
	}

	function supportsInterface(bytes4 id) external view returns (bool) {
		if (
			id == type(ERC165).interfaceId ||
			id == type(EIP173Proxy).interfaceId
		) {
			return true;
		}
		if (id == 0xFFFFFFFF) {
			return false;
		}

		ERC165 implementation = ERC165(_getImplementation());

		try implementation.supportsInterface(id) returns (bool support) {
			return support;
		} catch {
			return false;
		}
	}

	function transferOwnership(address newOwner) external onlyOwner {
		_setOwner(newOwner);
	}

	function upgradeTo(address newImplementation) external onlyOwner {
		_setImplementation(newImplementation, "");
	}

	function upgradeToAndCall(
		address newImplementation,
		bytes calldata data
	) external payable onlyOwner {
		_setImplementation(newImplementation, data);
	}

	// Modifier
	modifier onlyOwner() {
		require(msg.sender == _owner(), "NOT_AUTHORIZED");
		_;
	}

	// Internal functions
	function _owner() internal view returns (address adminAddress) {
		assembly {
			adminAddress := sload(
				0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103
			)
		}
	}

	function _setOwner(address newOwner) internal {
		address previousOwner = _owner();
		assembly {
			sstore(
				0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103,
				newOwner
			)
		}
		emit OwnershipTransferred(previousOwner, newOwner);
	}

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
