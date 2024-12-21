import userMokup from "../utiliti/userdetails.mjs";

 export const getUserdetailByID = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send({ msg: 'Invalid user ID' });
    }
    const finduser = userMokup.find((user) => user.id === id);
    if (!finduser) return res.status(404).send({ msg: 'User not found' });
    return res.status(200).send(finduser);
}

