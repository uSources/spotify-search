# Simple Spotify Music Search App

I create this app for lerning purpouses

It use Spotify API for search an album/artist/playlist

Has no comments or unit testing, maybe in a future i can add it.

## Configuration

Must create an .env file in root directory with this 3 lines:;

```
REACT_APP_CLIENT_ID={YOUR APP CLIENT ID}
REACT_APP_AUTHORIZE_URL=https://accounts.spotify.com/authorize
REACT_APP_REDIRECT_URL={YOUR APP REDIRECT ID}
```

Then register a new app in https://developer.spotify.com/dashboard/applications/, you should get an client_id and redirect_id, modify .env file with the proper ids

## Dependencies

- [Create-react-app](https://github.com/facebook/create-react-app)
- [React-Router](https://reactrouter.com/): As routing lib
- [React-redux](https://github.com/reduxjs/react-redux): AS State Container
- [Axios](https://github.com/axios/axios): As HTTP client lib
- [Loadash](https://github.com/lodash/lodash): Utils library
- [Bootstrap](https://github.com/react-bootstrap/react-bootstrap): UI library

**Although it is an application to learn, PRs are welcome!**
