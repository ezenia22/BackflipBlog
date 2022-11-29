import jwt from 'jsonwebtoken';

const secret = 'test';

const auth = async (req, res, next) => {     //next means do something and move to the next thing 
    try {
        const token = req.headers.authorization.split(" ")[1];  //the token is on the first position in the array after we split it
        const isCustomAuth = token.length < 500;  // if token length is lesser than 500 means its our own authentication, if more than 500, it means that it is the google auth.

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);    //give us the username of the person and its id

            req.userId = decodedData?.id;   //? is for optional chaining
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;  //sub is imply google's name for specific id that differentitates every single google user
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;