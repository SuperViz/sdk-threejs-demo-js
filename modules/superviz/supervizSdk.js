const DEVELOPER_KEY = "<SUPERVIZ-DEVELOPER-KEY>";

const url = new URL(document.URL);
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId');
let userType = url.searchParams.get('user-type');

export const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    group: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    participant: {
        id: Date.now().toPrecision(20), 
        name: userName ? userName : undefined,
        type: userType,
    },
    roomId: roomId,
    defaultAvatars: true,
    enableFollow: true,
    enableGoTo: true,
    enableGather: true,
    debug: true
  }); 
  