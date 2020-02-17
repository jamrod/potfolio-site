const data = [
    {
        Title: "Sync Files accross multiple PCs with Node",
        Content: "I ran into this problem when I was wrapping up a project last winter. I had installed a system that included a component of staff tracking. There were multiple departments each with their own computer which maintained a database file with all of there staff members. Trouble was, if those staff members went into another department that system would not recognize them. These databases would not share data so, I came up with a solution to sync all the databases to one single file. Basically, I needed one computer to have the 'master' database which would then be pushed out to all the other computers. I was already running node.js on a server on this network so I decided to use the node 'fs' library to solve this problem. This is what I came up with-",

        Code: `
        const fs = require('fs');
        //this is the file to replicate
        var masterFile = "\\\\path\\to\\file.mdb"; to other computers
        var fileLocations = [
            //these are the files to overwrite with the master file
            "\\\\path\\to\\file.mdb",
            "\\\\path\\to\\file.mdb",
            "\\\\path\\to\\file.mdb",
            "\\\\path\\to\\file.mdb",
        ];
        //local copy of last version of file to compare for changes
        var lastFile = "C:\\Users\\path\\to\\file.mdb";
        //backups of previous files
        var bkUpLoc = "C:\\Users\\path\\to\\backup folder\\";

        let lastDate = fs.statSync(lastFile).mtimeMs;
        let currentDate = fs.statSync(masterFile).mtimeMs;

        getDateStamp = function () {
            fullDate = new Date();
            d = fullDate.getDate();
            m = fullDate.getMonth() + 1;
            y = fullDate.getFullYear();
            dateStamp = [m, d, y];
            dateStamp = dateStamp.join("-");
            return dateStamp
        }

        syncFiles = function () {
            for (i = 0; i < fileLocations.length; i++) {
                fs.copyFileSync(lastFile, fileLocations[i]);
            }
            console.log("all files copied");
        };

        writeLog = function (txt) {
            stamp = getDateStamp();
            filePath = "C:\\Users\\path\\to\\ErrorLog.txt";
            str = stamp.concat(",", txt, ",");
            fs.appendFile(filePath, str, err => {
                if (err) throw err;
            });
        };

        if(lastDate <currentDate) {
            console.log("Newer File Available");
            stamp = getDateStamp();
            bkUpFile = bkUpLoc.concat(stamp, ".mdb");
            console.log(bkUpFile);
            try {
                fs.copyFileSync(lastFile, bkUpFile);
                fs.copyFileSync(masterFile, lastFile);
                syncFiles();
            }
            catch (err) {
                console.log(err);
                writeLog(err);
            }

        };
        `,
        Content1: `
        Every time it runs it will check to see if the 'master' file has been updated and, if it has, it will back up its local file, then copy over the 'master' file and the push that out to all the other computers.

        Only thing left to do was write a batch file so I could trigger this on a scheduled task from windows.
        Like so-`,
        Code1: `
        @echo off

        cd\\Node\\fileSync
        node fileSync
        sleep 5
        exit
        `,
        Content2: `Working great for me.`

    }
]

export default data