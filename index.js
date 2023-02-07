import { startScene, scene, camera } from './modules/threejs/scene.js'
import { supervizSdk } from "./modules/superviz/supervizSdk.js"

let threejsPluginInstance = null;

const addPlugin = () => {
    const player = camera;
    const plugin = new window.ThreeJsPlugin(scene, camera, player);
    threejsPluginInstance = supervizSdk.loadPlugin(plugin, {
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
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_PARTICIPANT_JOINED, () => {
    startScene();
    addPlugin();
})
