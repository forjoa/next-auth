# Understanding JWT Authentication in Next.js

For this little project, we are using `jose` library. 

To use this code, once you clone the repo on your local, you just have to install all the dependecies: `npm install`. Then, you can run it using: 
`npm run dev`.

What we are doing in this project is a simple form saving email and name. The most important part is on the `/lib.ts` file.

## Functions

- `getCookie()`: as it's name says, this method return just the 🍪 decrypted.

- `encrypt()`: receives the payload and return an async SignJWT object with the encrypted data.

- `decrypt()`: this method receives the encrypted data and makes a deconstruction just to get the payload and return it.

---

This code is fully made by [Lee Robinson](https://www.youtube.com/watch?v=DJvM2lSPn6w&t=85s)
