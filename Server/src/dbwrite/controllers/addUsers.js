import db from "../../../models";

export function addUsers(req, res) {
  let user_first_name = req.body.user_first_name;
  let user_last_name = req.body.user_last_name;
  let user_email_address = req.body.user_email_address;

  //Checks if the email entered is in the database.
  db.users
    .findAll({ where: { user_email_address: user_email_address } })
    .then((results) => {
      let emailNotUsed = results.length > 0 ? false : true;
      if (emailNotUsed) {
        createUser();
      } else {
        //Server caught that the email was already in the database.
        res.send(
          JSON.stringify("Sorry, the email you entered has already been used.")
        );
      }
    });

  let createUser = () => {
    db.users
      .create({
        user_first_name,
        user_last_name,
        user_email_address,
      })
      .then((result) => {
        res.send(JSON.stringify(result));
      })
      .catch((err) => {
        console.log(err);
        res.send(JSON.stringify("Error: ", err));
      });
  };
}
