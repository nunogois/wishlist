[![Nuno Góis](https://img.shields.io/badge/NG-Nuno%20G%C3%B3is-blue.svg?style=for-the-badge&logo=visual-studio-code&logoColor=blue)](https://www.nunogois.com)
![Daniel Alexandre](https://img.shields.io/badge/DA-Daniel%20Alexandre-blue.svg?style=for-the-badge&logo=visual-studio-code&logoColor=blue)
[![Made with Quasar Framework](https://img.shields.io/badge/made%20with-Quasar%20Framework-027be3.svg?style=for-the-badge)](https://quasar-framework.org/)
[![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-339933.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)
[![Made with MongoDB](https://img.shields.io/badge/Made%20with-MongoDB-47A248.svg?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Last Commit](https://img.shields.io/github/last-commit/yokiharo/wishlist.svg?style=for-the-badge)](https://github.com/yokiharo/wishlist/commits/master)

# Wishlist

A simple wishlist app made with [Quasar Framework](https://quasar-framework.org/)!

You can try it [here](https://wishlist-quasar.netlify.com).

This app is a PWA. If you access it using Chrome on Android, for example, it should ask you to install it.
It has offline capabilities as it uses LocalStorage but you can also sign in with Google OAuth to save your wishlist.

You can find the API/back-end [here](https://github.com/yokiharo/wishlist-api).

Feel free to contribute!

## Tips
 - You can press the Enter key to add new items to your list
 - We use sockets, so you can sign in with your account on multiple devices at the same time and they sync, like magic :sparkles:
 - The menu option on the bottom left corner is context sensitive, its options change accordingly
 - You can install this PWA through an option on the bottom left corner menu, if applicable

### Quick Start
1. Clone this repository by running `git clone https://github.com/yokiharo/wishlist.git` in a folder of your choice;
2. Run `npm install` or `yarn` on the created project folder to install pre-requisites;
3. Run `quasar dev` to start developing (see Quasar Framework docs for more information!);
4. Make your changes and create a PR :smiley:


### Possible Next Steps
1. Several lists for each user;
2. Rewrite API in Go;
3. Major cleanup and refactoring;

## Disclaimer
This app's only purpose is educational - We made it for fun mostly as a way of learning and training [Quasar Framework](https://quasar-framework.org/). The app is provided to you *as is*, considering it is an open-source project and may change over time. If the app performance isn't the best, please keep in mind that every single part of it is being hosted by **100% free** services. The app **does not** store any information from you except in the case of signing in, in which case we store your list items along with your OAuth provider's ID, e.g. Google ID, so you can retrieve them later. The information is stored on a free tier cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). In case of offline use instead of signing in, the app only stores information locally in your browser, using [Quasar Web Storage (LocalStorage)](https://quasar-framework.org/components/web-storage.html).

We're still learning and as such it's only natural to make mistakes. Let us know if there's something that should be corrected or could be done better. All feedback is welcome!