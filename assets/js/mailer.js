// Mailer
function sendmail() =>
{
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "da6e34cdb24b25",
        Password: "fa5435d1a74bb5",
        To: 'chughrahul613@gmail.com',
        From: "rbuss@snasu.info",
        Subject: "Sending Email using code JS By Parv",
        Body: "Well that was not easy!!",
      })
        .then(function (message) {
          alert("Mail sent successfully")
        });
    }
}
