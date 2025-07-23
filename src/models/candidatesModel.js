const db = require('../config/db');



// wherever you want to send an email
const sendEmail = require('../utils/mailer');

const Candidates = {
    fileCOC: async(_name, _email, _course, _position) => {
        const [rows] = await db.execute('CALL FileCoC(?,?,?,?)',
            [_name, _email, _course, _position]);
        // return rows[0][0]

        const result = rows[0][0];

        // Check if email should be sent
        // if (result.retVal === 1) {
        // await sendEmail({
        //     to: 'edwardcatapan@gmail.com',  //Admin Emails
        //     subject: 'COC Submission',
        //     text: `Hello Admin,\n\n${_name} has submitted an application for the position of ${_position}.\n\nPlease review the submission at your earliest convenience.\n\nThank you.`,
        //     html: `
        //     <p>Hello Admin,</p>
        //     <p><strong>${_name}</strong> has submitted an application for the position of <strong>${_position}</strong>.</p>
        //     <p>Please review the submission at your earliest convenience.</p>
        //     <p>Thank you.</p>
        //     `

        // });
        // }

         return result;
        
         
    },


    updateCoC: async(_id, _status, _approved_by) => {
        const [rows] = await db.execute('CALL UpdateCoC(?,?,?)',
            [_id, _status, _approved_by]
        );
        return rows[0][0]
    },

    findAllCandidates: async () => {
        const [rows] = await db.execute('CALL GetAllCandidates');
        return rows[0];
    },

    findCandidatesById: async(_id) => {
        const [rows] = await db.execute('CALL GetCandidatesByID(?)', [_id]);
        return rows[0][0];
    }

    
}

module.exports = Candidates;