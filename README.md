# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`



### caching
There is no need for caching for this app but in case there is I would use react memo, useMemo or useCallback


### Answers 

1. If you had control of the web-server, what are some ways you might implement a caching solution?


On backend side, I would implement reverse caching, where copies of the Web objects on your own internal Web servers are stored on a proxy server at the edge of your network to increase performance for outsiders who visit your sites.

Also, implementing Redis is a good solution for caching. Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indices.


2. How might you implement offline caching for your typeahead component?

-Local storage can help about data caching but more efficient way is to use a service workers and make some type of progressive web app

3. When using traditional session cookies, what are the primary security concerns and mitigation techniques you might use?

Here are five security issues with cookies that you should know about:
Cross-Site Request Forgery Attack (XSRF) 
Session Fixation. ...
Cross-Site Scripting (XSS) ...
Cookie Tossing Attack. ...
Cookie Capturing.

-Since the data in cookies doesn't change, cookies themselves aren't harmful. They can't infect computers with viruses or other malware. However, some cyberattacks can hijack cookies and enable access to your browsing sessions. The danger lies in their ability to track individuals' browsing histories.

Since tracking cookies are used to gather information about you without your authorization, they present a real threat to your online privacy. Tracking cookies like third-party cookies aren't used to enhance your experience but rather to keep track of your activity across certain websites.

4. What are some advantages and disadvantages to using JWT for authorization and authentication in a web application?
ADVANTAGES:
-you can create and verify the tokens on the fly without a need to store them ever in the database.
-Simple implementation and faster development time.
-Can be used across services and specifically be isolated in an authorization micro-service that can create these tokens. The rest of your microservices can just have the public key to verify the signature of the tokens.
-The tokens are based on JSON, which is defacto standard now-a-days for inter-message communication among web application & services.

DISADVANTAGES:
-No way to log out or invalidate sessions for users. Moreover, there is no way for a user to disable their sessions across multiple devices.

-Since the tokens are generated and verified on the fly, we can't have access to the different logged-in clients which can pose problems when you need to identify the devices.

-Data leakage is plausible through a single secret key used for signing the tokens. It is much harder to lose the entire database, for example, in cases of session management when compared to JWTs. Since JWTs are created on the fly, the only thing that is protecting the creation of forged tokens is the secret key used to sign the tokens.

-JWTs need care & understanding for implementation. If you use the none algorithm, it uses no signing key, which means creating a forged token is child's play. Once you have the forged token and you're using ids for users that are easier to guess (think of integer ids), or you're using frameworks such as Strapi that has user id 1 as the administrator, with a forged token, your entire account will be taken over in a matter of seconds.

-We should always take care of not blindly loading signing keys with the kid header in JWT. The key should always be first validated for correctness as compared with the algorithm specified in the header.

5. What are all the ways you can think of to write BAD React code?

use controlled component instead of uncontrolled, avoiding expensive re-render components and potentially loop which can make a performance issues by incorrect usage of react hooks. 

optimization can make great impact on application performance but also can make negative impact because of incorrect usage, so should be very careful.

Avoid prop drilling through a child components and use some of the state management tools instead.

Clear unused props because of unnecessary rendering components which can make performance issue also.

Structure code into reusable components and avoid duplicate code. 

Isolate your functions in a separate files because of a better readability 

In components do not mutate props objects because props are immutable and should not be mutated. Rather, make a copy and do some changes if needed

Always use a key prop in a list

Avoid component declaration within another component

use lazy loading if application running slow

clean unused imports and console logs

6. What new Web or React APIs are you most excited about?

Axios - because of easy implementation and I consider it as a very useful tool for developers. In an easy way can communicate to backend.