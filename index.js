import { startScene, scene, camera } from './modules/threejs/scene.js'
import { supervizSdk } from "./modules/superviz/supervizSdk.js"

let threejsPluginInstance = null;
const iframeMeetingSettings = document.getElementById("sv-video-frame");

// verify if meeting settings iframe is loaded
iframeMeetingSettings.addEventListener("load", function () {
    document.getElementById("loader-ms").style.display = "none";
});

const addPlugin = () => {
    const player = camera;
    const plugin = new window.ThreeJsPlugin(scene, camera, player);
    threejsPluginInstance = supervizSdk.loadPlugin(plugin, {
        avatarConfig: {
            height: 0,
            scale: 1
        },
        isAvatarsEnabled: true,
        isLaserEnabled: true,
        isMouseEnabled: true,
        isNameEnabled: true,
        renderLocalAvatar: false,
    });
}

// joined meeting
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_PARTICIPANT_JOINED, () => {
    startScene();
    addPlugin();
})
