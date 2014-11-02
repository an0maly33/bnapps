BNApps
======

Brave Newbies Archeage guild apps

Install nodejs & npm using your preferred method.
        On Mint 16+ (after installing with apt) I had to create a symlink in /usr/bin/: node -> nodejs.
        Some scripts expect the exec to be named "node".

Get Meteor:
-----------
curl https://install.meteor.com/ | sh

cd /path/to/project/root

Get the project:
----------------
git clone https://github.com/an0maly33/bnapps

cd bnapps

Install the needed Meteor modules:
----------------------------------
meteor add accounts-ui accounts-password

Start the Meteor server:
------------------------
meteor start

Daemonizing Meteor, managing the MongoDB, etc are outside the scope of this quickstart document.  Consult Meteor 
and MongoDB documentation.  App-specific structure and notes will be documented later.
