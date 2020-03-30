pragma solidity ^0.5.0;

contract stringConcat {
    function concat(string memory s1, string memory s2) pure public returns(bytes memory) {
        bytes memory result = new bytes(64);
        bytes32 b1;
        bytes32 b2;
        assembly {
            b1 := mload(add(s1, 32))
            b2 := mload(add(s2, 32))
            mstore(add(result, 32), b1)
            mstore(add(result, 64), b2)
        }
        return result;
    }
}
