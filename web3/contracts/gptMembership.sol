// SPDX-Licence-Identification: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contarct gptMembership is ERC721{
    address public owner;
    uint256 public membershipTypes;
    uint256 public totalMembership;

    string public MY_CONTRACT = "KeyChain";

    struct Membership{
        uint256 id;
        string name;
        uint256 cost;
        string date;
    }

    struct UserMembership{
        uint256 id;
        uint256 membershipId;
        address addressUser;
        uint256 cost;
        string expireDate;
    }

    mapping(address => UserMembership) userMemberships;
    mapping(uint256 => Membership) membership;
    mapping(uint256 => mapping(address => bool)) public hasBought;
    mapping(uint256 => mapping(uint256 => address)) public membershipTaken;
    mapping(uint256 => uint256[]) membershipsTaken;

    modifier onlyOwner(){
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor(
        string memory _name, string memory _symbol
    ) ERC721(_name, _symbol){
        owner = msg.sender;
    }

    function list(string memory _name, uint256 _cost, string memory _date) public onlyOwner(){
        membershipTypes++;
        memberships[membershipTypes] = Membership(
            membershipTypes,
            _name,
            _cost,
            _date
        );
    }

    function mint(uint256 _membershipId, address _user, string memory _expiredDate) public payable {
        require(_membershipId != 0);
        require(_membershipId <= membershipTypes);

        require(msg.value >= membership[_membershipId].cost, "Insufficent balance");
        totalMembership++;

        userMembership[_user] = UserMembership(
            totalMembership,
            _membershipId,
            _user,
            membership[_membershipId].cost,
            _expireDate
        );

        hasBrought[_membershipId][msg.sender] = true;
        membershipTaken[_membershipId][totalMemberships] = msg.sender;

        membershipsTaken[_membershipId].push(totalMemberships);

        _safeMint(msg.sender, totalMemberships);
    }

    function getMemberships(uint256) public view returns(Membership memory){
        return membership[_membershipId];
    }

    function getMembershipTaken(uint256 _membershipId) public view returns(uint256[] memory){
        return membershipTaken[_membershipId];
    }

    function withdraw() public onlyOwner(){
        (bool success,) = owner.call{value: address(this).balance}("");
        require(success);
    }

    function getUsermembership(address _address) public view returns(UserMembership memory){
        return userMembership[_address];
    }
}