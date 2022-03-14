"use strict";

const odeToJoy = "{quarterNote line3}-{quarterNote line3}-{quarterNote space3}-{quarterNote line4}-{bar}-" +
                           "{quarterNote line4}-{quarterNote space3}-{quarterNote line3}-{quarterNote space2}-{bar}-" +
                           "{quarterNote line2}-{quarterNote line2}-{quarterNote space2}-{quarterNote line3}-{bar}-" +
                           "{quarterNote line3}-{quarterRest}-{quarterNote space2}-{quarterNote space2}";

const mode = window.location.pathname.slice(10, window.location.pathname.length);

if (mode === "default") {
    document.getElementById('header').appendChild(document.createTextNode('Static Demo'));
} else if (mode === "editable") {
    document.getElementById('header').appendChild(document.createTextNode('Interactive Demo'));
} else if (mode === "only-controls") {
    document.getElementById('header').appendChild(document.createTextNode('Music Player Demo'));
} else {
    document.getElementById('header').appendChild(document.createTextNode('Background Music Demo'));
}


const staff = new Staff('target', '4/4', 'treble', 'G', '145', odeToJoy, mode);

staff.build(staff);
staff.editWaveType('sawtooth');

if (mode === "hidden") {
    staff.playbackControl('play');
}