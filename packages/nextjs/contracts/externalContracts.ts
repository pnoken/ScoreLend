const externalContracts = {
    1: {
        AnimaPOP: {
            address: "0xAd5B23B4bC9c8C5416eE7Fe29eB5FDbE2f0E0b66",
            abi: [
                'function getMasterToken(address account) view returns (uint256)',
                'function tokenURI(uint256 tokenId) view returns (string)'
            ],
        },
    },
    5: {
        DAI: {
            address: "0x...",
            abi: [...],
        },
        WETH: {
            address: "0x...",
            abi: [...],
        },
    },
} as const;