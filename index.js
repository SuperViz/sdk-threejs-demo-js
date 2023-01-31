import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { startScene, scene, camera, player } from './modules/threejs/scene.js'

let threejsPluginInstance = null;

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

// joined meeting
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_USER_JOINED, () => {
    startScene();
    addPlugin();
});
