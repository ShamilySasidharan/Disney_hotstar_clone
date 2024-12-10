export const DISNEY_LOGO = "https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
export const PROFILE_ICON = "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png"
export const SEARCH_ICON ="https://www.hotstar.com/in/explore"
export const LOGIN_SCREEN_IMAGE = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png"

export const STAR_BACKGROUND = "https://www.hotstar.com/assets-x/web/assets-ui-lib/images/stars.9c90b28001575d3d107b.svg"

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
    }
  };

  export const POSTER_URL ="https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANGUAGE = [
    {
      id:"en",
      name:"English"
    },
    {
      id:"hindi",
      name:"Hindi"
    },
    {
      id:"german",
      name:"German"
    },
    {
      id:"spanish",
      name:"Spanish"
    }

  ]

  export const  OPENAI_KEY = process.env.REACT_APP_OPEN_AI_KEY