import { startScene, scene, camera, player } from './modules/threejs/scene.js'

const DEVELOPER_KEY = "DEVELOPER_KEY";
const url = new URL(document.URL);
let threejsPluginInstance = null;
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId');
let userType = url.searchParams.get('user-type');

function addPlugin () {
    const plugin = new window.ThreePlugin(scene, camera, player);
    threejsPluginInstance = supervizSdk.connectAdapter(plugin, {
        avatarConfig: {
            height: 0,
            scale: 1
        },
        isAvatarsEnabled: true,
        isPointersEnabled: true,
        isNameEnabled: true,
        renderLocalAvatar: false,
    });
}


async function init() { 
  const url = new URL(document.URL)

  const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    userGroup: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    user: {
        id: Math.random().toFixed(1), 
        name: userName ? userName : undefined,
        isHostCandidate: userType === 'host',
    },
    roomId: roomId,
    defaultAvatars: true,
    enableFollow: true,
    debug: true
  }); 

    // joined meeting
    supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_USER_JOINED, () => {
        startScene();
        addPlugin();
    });
}

init();