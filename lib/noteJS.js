(function(global, document) { 

    const defineCircleofFifths = () => {
        const circleOfFifths = {};

        const majorsharp = ['C', 'G' , 'D', 'A', 'E', 'B', 'F#', 'C#'];
        const minorsharp = ['a', 'e' , 'b', 'f#', 'c#', 'g#', 'd#', 'a#'];
        const majorflat = ['F' , 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];
        const minorflat = ['d' , 'g', 'c', 'f', 'bb', 'eb', 'ab'];

        for (let i=0; i < majorsharp.length; i++) {
            circleOfFifths[majorsharp[i]] = {type:'sharp', num: i};
            circleOfFifths[minorsharp[i]] = {type:'sharp', num: i};
        }
        for (let j=1; j < majorflat.length + 1; j++) {
            circleOfFifths[majorflat[j-1]] = {type:'flat', num: j};
            circleOfFifths[minorflat[j-1]] = {type:'flat', num: j};
        }

        return circleOfFifths;
    };

    const frequencies = {
        treble: {
            _line6: 880.00,
            _space5sharp: 830.61,
            _space5: 783.99, 
            _space5flat: 739.99,
            _line5sharp: 739.99,
            _line5: 698.46, 
            _line5flat: 659.25,
            _space4sharp: 698.46,
            _space4: 659.25, 
            _space4flat: 622.25,
            _line4sharp: 622.25,
            _line4: 587.33, 
            _line4flat: 554.37,
            _space3sharp: 554.37,
            _space3: 523.25,
            _space3flat: 493.88,
            _line3sharp: 523.25,
            _line3: 493.88,
            _line3flat: 466.16,
            _space2sharp: 466.16,
            _space2: 440,
            _space2flat: 415.30,
            _line2sharp: 415.30,
            _line2: 392,
            _line2flat: 369.99,
            _space1sharp: 369.99,
            _space1: 349.23,
            _space1flat: 329.63,
            _line1sharp: 349.23,
            _line1: 329.63,
            _line1flat: 311.13,
            _space0sharp: 311.13,
            _space0: 293.66,
            _space0flat: 277.18,
            _line_1: 261.63
        },
        bass: {
            _line6: 261.63,
            _space5sharp: 261.63,
            _space5: 246.94, 
            _space5flat: 233.08,
            _line5sharp: 233.08,
            _line5: 220.00, 
            _line5flat: 207.65,
            _space4sharp: 207.65,
            _space4: 196.00, 
            _space4flat: 185.00,
            _line4sharp: 185.00,
            _line4: 174.61, 
            _line4flat: 164.81,
            _space3sharp: 174.61,
            _space3: 164.81,
            _space3flat: 155.56,
            _line3sharp: 155.56,
            _line3: 146.83,
            _line3flat: 138.59,
            _space2sharp: 138.59,
            _space2: 130.81,
            _space2flat: 123.47,
            _line2sharp: 130.81,
            _line2: 123.47,
            _line2flat: 116.54,
            _space1sharp: 116.54,
            _space1: 110.00,
            _space1flat: 103.83,
            _line1sharp: 103.83,
            _line1: 98.00,
            _line1flat: 92.50,
            _space0sharp: 92.50,
            _space0: 87.31,
            _space0flat: 82.41,
            _line_1: 82.41
        }
    };

    for (let i = 0; i < 6; i++) {
        if (i !== 0) {
            frequencies['treble'][`_line${i}natural`] = frequencies[`_line${i}`];
            frequencies['bass'][`_line${i}natural`] = frequencies[`_line${i}`];
        }
        frequencies['treble'][`_space${i}natural`] = frequencies[`_space${i}`];
        frequencies['bass'][`_space${i}natural`] = frequencies[`_space${i}`];
    }

    const applyKey = (clef, key) => {
        const circleOfFifths = defineCircleofFifths();
        const keyObj = circleOfFifths[key];
        const freqs = Object.assign({}, frequencies[clef]);


        for (let i = 1; i < keyObj.num + 1; i++) {
            let targets;

            switch (i) {
                case 1:
                    if (keyObj.type === 'sharp') {
                        targets = (clef === 'treble') ? ['_line5', '_space1'] : ['_line4', '_space0'];
                    } else {
                        targets = (clef === 'treble') ? ['_line3'] : ['_line2', '_space5'];
                    }
                    break;
                case 2:
                    if (keyObj.type === 'sharp') {
                        targets = (clef === 'treble') ? ['_space3'] : ['_space2'];
                    } else {
                        targets = (clef === 'treble') ? ['_space4', '_line1'] : ['_space3'];
                    }
                    break;
                case 3:
                    if (keyObj.type === 'sharp') {
                        targets = (clef === 'treble') ? ['_space5', '_line2'] : ['_space4', '_line1'];
                    } else {
                        targets = (clef === 'treble') ? ['_space2'] : ['_space1', '_line5'];
                    }
                    break;
                case 4:
                    targets = (clef === 'treble') ? ['_line4', '_space0'] : ['_line3'];
                    break;
                case 5:
                    if (keyObj.type === 'sharp') {
                        targets = (clef === 'treble') ? ['_space2'] : ['_space1', '_line5'];
                    } else {
                        targets = (clef === 'treble') ? ['_space5', '_line2'] : ['_space4', '_line1'];
                    }
                    break;
                case 6:
                    if (keyObj.type === 'sharp') {
                        targets = (clef === 'treble') ? ['_space4', '_line1'] : ['_space3'];
                    } else {
                        targets = (clef === 'treble') ? ['_space3'] : ['_space2'];
                    }
                    break;
                case 7:
                    if (keyObj.type === 'sharp') {
                        targets = (clef === 'treble') ? ['_line3'] : ['_line2', '_space5'];
                    } else {
                        targets = (clef === 'treble') ? ['_line5', '_space1'] : ['_line4', '_space0'];  
                    }
                    break;
            }
            let target;

            for (target of targets) {
                const oppPosType = (target.slice(0, target.length - 1) === '_space') ? '_line' : '_space';

                let augDim;
                if (oppPosType === 'line') {
                    augDim = (keyObj.type === 'sharp') ? 1 : 0;
                } else {
                    augDim = (keyObj.type === 'sharp') ? 0 : -1;
                }
                if (parseInt(target[target.length - 1]) + augDim < 0) {
                    freqs[target + keyObj.type] = frequencies[clef][`${oppPosType}_1`];
                } else {
                    freqs[target + keyObj.type] = frequencies[clef][`${oppPosType}${parseInt(target[target.length - 1]) + augDim}`];
                }
                freqs[target] = frequencies[clef][target + keyObj.type];
                freqs[target + ((keyObj.type === 'sharp') ? 'flat' : 'sharp')] = frequencies[clef][target];
                freqs[target + 'natural'] = frequencies[clef][target];
            }
        }

        return freqs;
    }

    const makeStaffMap = () => {
        return {
            _space5: '_space5', 
            _line5: '_line5', 
            _space4: '_space4', 
            _line4: '_line4', 
            _space3: '_space3',
            _line3: '_line3', 
            _space2: '_space2',
            _line2: '_line2', 
            _space1: '_space1',
            _line1: '_line1', 
            _space0: '_space0'
        };
    }

    const getDivPosition = (val, infoData) => {
        let element = val;
        let top = element.offsetTop + (element.offsetParent.offsetTop || 0) + ((infoData) ? (element.offsetParent.offsetParent.offsetTop || 0) : 0);
        let left = element.offsetLeft + (element.offsetParent.offsetLeft || 0) + ((infoData) ? (element.offsetParent.offsetParent.offsetLeft || 0) : 0);
        return [top, left];
    }

    let globalInt = 0;

    function Staff (container, timeSignature, clef, key, tempo, composition, mode) {
        this.context = new AudioContext();
        this.state = {
            container: container,
            height: 100,
            timeSignature: timeSignature,
            clef: clef,
            key: key,
            tempo: tempo,
            composition: composition,
            elements: [],
            oscillator: this.context.createOscillator(),
            playState: 'stop',
            isStarted: false,
            editable: (mode === 'editable') ? true : false,
            hidden: (mode === 'hidden') ? true : false,
            onlyControls: (mode === 'only-controls') ? true : false,
            dashboardElement: null,
            destroyDashboard: null
        }

        this.state.oscillator.type = 'square';
        this.state.oscillator.connect(this.context.destination);

        // Context Binding
        this.build = () => {this._build(this)};
        this.editWaveType = (val) => {this._editWaveType(this, val)};
        this.changeMode = (val) => {this._changeMode(this, val)};
        this.setComposition = (val) => {this._setComposition(this, val)};
        this.playbackControl = (val) => {this._playbackControl(this, val)};
    }

    // API accessible functions
    Staff.prototype = {
        _build: (self) => {
            StaffPrivateFuncs.buildStaff(self);
            StaffPrivateFuncs.buildControls(self);
        },

        _editWaveType: (self, waveType) => {
            self.state.oscillator.type = waveType; 
        },

        _changeMode: (self, mode) => {
            let target;
            if (self.state.container === 'body') {
                target = document.querySelector(self.state.container);
            } else {
                target = document.getElementById(self.state.container);
            }
            if (target) {
                let element, staff, controls; 
                for (element of target.children) {
                    if (element.id === '_staffContainer') {
                        staff = element;
                    } else if (element.id === '_playbackContainer') {
                        controls = element;
                    }
                }
                if (staff) {
                    target.removeChild(staff);
                } 
                if (controls) {
                    target.removeChild(controls);
                }
                self.state.editable = (mode === 'editable') ? true : false;
                self.state.hidden = (mode === 'hidden') ? true : false;
                self.state.onlyControls = (mode === 'only-controls') ? true : false;

                self.build();
            }
        },

        _setComposition: (self, composition) => {
            let target;
            if (self.state.container === 'body') {
                target = document.querySelector(self.state.container);
            } else {
                target = document.getElementById(self.state.container);
            }
            if (target) {
                let element, staff, controls; 
                for (element of target.children) {
                    if (element.id === '_staffContainer') {
                        staff = element;
                    } else if (element.id === '_playbackContainer') {
                        controls = element;
                    }
                }
                if (staff) {
                    target.removeChild(staff);
                } 
                if (controls) {
                    target.removeChild(controls);
                }
                self.state.composition = composition;

                self.build();
            }
        },
        
        _playbackControl: (self, val) => {
            if (val === 'play') {
                StaffPrivateFuncs.play(self);
                return;
            } else if (val !== 'pause') {
                StaffPrivateFuncs.pause(self);
                return;
            } else if (val === 'stop') {
                StaffPrivateFuncs.stop(self);
                return;
            }
            console.log('Invalid option. Doing nothing...');
            StaffPrivateFuncs.play(self)
        }
    };

    // Funtions that operate on the staff object, but should not be accessible
    const StaffPrivateFuncs = {
        buildStaff: (self) => {
            const container = document.createElement('div');
            container.id = '_staffContainer';
            if (!self.state.hidden && !self.state.onlyControls) {
                container.style = `height: ${self.state.height}px; width: 100%`;
            } else {
                container.className = '_hidden';
            }

            const staff = document.createElement('div');
            staff.className = '_staff';

            if (self.state.clef !== 'none') {
                staff.appendChild(StaffPrivateFuncs.buildStaffData(self));
            }

            for (let i = 1; i < 6; i++) {
                const line = document.createElement('div');
                line.className = '_line';
                line.id = `_line${i}`;
                staff.appendChild(line);
            }

            StaffPrivateFuncs.renderElements(self, staff);

            container.appendChild(staff);
            if (self.state.container === 'body') {
                document.querySelector(self.state.container).appendChild(container);
                return;
            }
            document.getElementById(self.state.container).appendChild(container);
            return;
        },

        // Renders animation/sound controls at the bottom of the staff
        buildControls: (self) => {
            const container = document.createElement('div');
            container.id = '_playbackContainer';
            if (!self.state.hidden) {
                container.className = `_controlContainer`;
            } else {
                container.className = '_hidden';
            }

            const header = document.createElement('p');
            header.className = '_controlHeader';

            // Text input for tempo
            if (self.state.editable) {

                header.appendChild(document.createTextNode(`Controls (Tempo=`));

                const bpm =  document.createElement('input');
                bpm.id = '_changeTempoInput';
                bpm.className = '_controlHeader';
                bpm.size = '3';
                bpm.type = 'number';
                bpm.value = self.state.tempo;
                bpm.min = '1';
                header.appendChild(bpm);

                bpm.addEventListener('change', StaffPrivateFuncs.changeTempo(self));

                header.appendChild(document.createTextNode(`bpm):`));
            } else {
                header.appendChild(document.createTextNode(`Controls (Tempo=${self.state.tempo}bpm):`));
            }

            // Button elements

            const playButton = document.createElement('img');
            playButton.className = '_controlButton';
            playButton.src = '/assets/play.png'
            playButton.onclick = () => {StaffPrivateFuncs.play(self)};
            header.append(playButton);

            const pauseButton = document.createElement('img');
            pauseButton.className = '_controlButton';
            pauseButton.src = '/assets/pause.png'
            pauseButton.onclick = () => {StaffPrivateFuncs.pause(self)};
            header.append(pauseButton);

            const stopButton = document.createElement('img');
            stopButton.className = '_controlButton';
            stopButton.src = '/assets/stop.png'
            stopButton.onclick = () => {StaffPrivateFuncs.stop(self)};
            header.append(stopButton);

            container.appendChild(header);

            if (self.state.container === 'body') {
                document.querySelector(self.state.container).appendChild(container);
                return;
            }
            document.getElementById(self.state.container).appendChild(container);
            return;
        },

        // Generates the clef, key signature, and time signature html elements
        buildStaffData: (self) => {
            const container = document.createElement('div');
            container.className = '_staffData';

            const clef = document.createElement('img');
            clef.className = `_${self.state.clef}clef`
            clef.src = `/assets/${self.state.clef}clef.png`;
            container.appendChild(clef);

            const circleOfFifths = defineCircleofFifths();
            const type = circleOfFifths[self.state.key].type;

            // Key signature
            const accidentalContainer = document.createElement('div');
            accidentalContainer.className = '_accidentalContainer';
            accidentalContainer.style = `width: ${((type === 'sharp') ? 12.15 : 11.1333)*(circleOfFifths[self.state.key].num + 1)}px`;

            for (let i = 1; i < circleOfFifths[self.state.key].num + 1; i++) {
                const indvContainer = document.createElement('div');
                indvContainer.className = '_containerNoPadding';

                const accidental = document.createElement('img');
                accidental.src = `/assets/${type}.png`;
                accidental.className = `_${type} _accidental _${self.state.clef}${type}${i}`
                indvContainer.appendChild(accidental);

                accidentalContainer.appendChild(indvContainer);
            }

            container.appendChild(accidentalContainer);

            // Time Signature
            const timeSignature = document.createElement('div');
            timeSignature.className = '_timeSignature';
            timeSignature.style = `font-size: ${(self.state.height / 2) - 1.5*(self.state.height / 10)}px;
                                    height: ${self.state.height - 1.8*(self.state.height / 10)}px;
                                    width: ${self.state.height / 2}px;
                                    padding-top: ${1.8*(self.state.height / 10)}px;`;
            timeSignature.appendChild(document.createTextNode(self.state.timeSignature.split('/').join('')));

            container.appendChild(timeSignature);

            // Generates dashboard for editing clef, key signature, time signature
            if (self.state.editable) {
                clef.addEventListener('click', StaffPrivateFuncs.changeClef(self, clef));
                accidentalContainer.addEventListener('click', StaffPrivateFuncs.generateDashboardStaffInfo(self, accidentalContainer, "key"));
                timeSignature.addEventListener('click', StaffPrivateFuncs.generateDashboardStaffInfo(self, timeSignature, "time"));
            }

            return container
        },

        // Generates dashboard for editing clef, key signature, time signature
        renderElements: (self, staff) => {
            const staffElements = self.state.composition.split('-');

            let element;
            for (element of staffElements) {
                staff.appendChild(StaffPrivateFuncs.generateElement(self, element));
            }

            const endingBar =  document.createElement('div');
            endingBar.className = '_endingContainer';

            const bar =  document.createElement('div');
            bar.className = '_endingBar';
            endingBar.appendChild(bar);
            staff.appendChild(endingBar);

            if (self.state.editable) {
                endingBar.addEventListener('click', StaffPrivateFuncs.generateDashboardImmovable(self, endingBar));
            }

            const blank = document.createElement('div');
            blank.className = '_blank';
            staff.appendChild(blank);
        },

        generateElement: (self, elementString) => {
            const elementData = elementString.slice(1, elementString.length - 1).split(' ');
            const type = elementData[0];

            if (type === 'bar') {
                return StaffPrivateFuncs.generateBar(self, false);
            } else if (type.slice(type.length - 4, type.length) === 'Note') {
                return StaffPrivateFuncs.generateNote(self, type, elementData[1], false);
            } else if (type.slice(type.length - 4, type.length) === 'Rest') {
                return StaffPrivateFuncs.generateRest(self, type, false);
            } else if (type.slice(type.length - 10, type.length) === 'Accidental') {
                return StaffPrivateFuncs.generateAccidental(self, type, elementData[1], false);
            } else {
                console.log('Invalid element');
            }
        },

        generateBar: (self, viaBar) => {
            const barContainer =  document.createElement('div');
            barContainer.className = '_elementContainer';

            const barObj = {
                type: 'bar'
            };

            const bar =  document.createElement('div');
            bar.className = '_bar';
            barContainer.appendChild(bar);

            if (self.state.editable) {
                barContainer.addEventListener('click', StaffPrivateFuncs.generateDashboardImmovable(self, barContainer));
            }

            barContainer.id = `_elementNo${globalInt}`;
            globalInt++;

            barObj.htmlElement = barContainer;

            if (!viaBar) {
                (self.state.elements).push(barObj);
                return barContainer;
            }
            return barObj;
        },

        generateNote: (self, type, position, replace) => {
            const noteContainer =  document.createElement('div');
            noteContainer.className = '_elementContainer';

            const noteObj = {
                type: 'note'
            };

            const note = document.createElement('div');
            let needsStem = false;
            if (type === "wholeNote") {
                note.className = `_solidNote _${position}`;

                const fill = document.createElement('div');
                fill.className = `_wholeNote`;

                note.appendChild(fill);
                noteObj.count = 4;
            } else if (type === "halfNote") {
                note.className = `_solidNote _${position}`;

                const fill = document.createElement('div');
                fill.className = `_halfNote`;

                note.appendChild(fill);

                needsStem = true;
                noteObj.count = 2;
            } else if (type === "quarterNote") {
                note.className = `_solidNote _${position}`;

                needsStem = true;
                noteObj.count = 1;
            }

            if (needsStem) {
                const stem = document.createElement('div');

                stem.className = `_stem _${position}`;
                noteContainer.appendChild(stem);
            }

            noteContainer.appendChild(note);
            if (self.state.editable) {
                noteContainer.addEventListener('click', StaffPrivateFuncs.generateDashboardMovable(self, noteContainer));
            }

            noteContainer.id = `_elementNo${globalInt}`;
            globalInt++;

            if (!replace) {
                noteObj.htmlElement = noteContainer;
                (self.state.elements).push(noteObj);

                return noteContainer
            }

            noteObj.htmlElement = noteContainer;

            return noteObj;

        },

        generateAccidental: (self, type, position, replace) => {
            const accidentalContainer =  document.createElement('div');
            accidentalContainer.className = '_elementContainer';

            const accidentalObj = {
                type: 'accidental'
            };

            const accidental = document.createElement('img');
            if (type === "sharpAccidental") {
                accidental.className = `_sharp _accidental _${position}`;
                accidental.src = `/assets/sharp.png`;
            } else if (type === "flatAccidental") {
                accidental.className = `_flat _accidental _${position}`;
                accidental.src = `/assets/flat.png`;
            } else if (type === "naturalAccidental"){
                accidental.className = `_natural _accidental _${position}`;
                accidental.src = `/assets/natural.png`;
            }
            accidentalContainer.appendChild(accidental);
            
            if (self.state.editable) {
                accidentalContainer.addEventListener('click', StaffPrivateFuncs.generateDashboardMovable(self, accidentalContainer));
            }

            accidentalContainer.id = `_elementNo${globalInt}`;
            globalInt++;

            if (!replace) {
                accidentalObj.htmlElement = accidentalContainer;
                (self.state.elements).push(accidentalObj);

                return accidentalContainer;
            }

            accidentalObj.htmlElement = accidentalContainer;

            return accidentalObj;
        },

        generateRest: (self, type, replace) => {
            const restContainer =  document.createElement('div');
            restContainer.className = '_elementContainer';

            const restObj = {
                type: 'rest'
            };

            const rest = document.createElement((type === 'quarterRest') ? 'img' : 'div');
            if (type === "wholeRest") {
                rest.className = `_hatRest _under`;
                restObj.count = 4;
            } else if (type === "halfRest") {
                rest.className = `_hatRest _over`;
                restObj.count = 2;
            } else if (type === "quarterRest") {
                rest.className = `_quarterRest`
                rest.src = `/assets/quarterrest.png`;
                restObj.count = 1;
            }

            restContainer.appendChild(rest);
            if (self.state.editable) {
                restContainer.addEventListener('click', StaffPrivateFuncs.generateDashboardImmovable(self, restContainer));
            }

            restContainer.id = `_elementNo${globalInt}`;
            globalInt++;

            if (!replace) {
                restObj.htmlElement = restContainer;
                (self.state.elements).push(restObj);

                return restContainer;
            }

            restObj.htmlElement = restContainer;
            
            return restObj;
        },

        play: (self) => {
            if(self.state.dashboardElement !== null) {
                self.state.destroyDashboard();
            }
            if (self.state.playState === 'stop') {
                StaffPrivateFuncs.animateNotes(self);
                return;
            }
            self.state.playState = 'play';
        },

        pause: (self) => {
            if(self.state.dashboardElement !== null) {
                self.state.destroyDashboard();
            }
            self.context.suspend();
            self.state.playState = 'pause';
        },

        stop: (self) => {
            self.state.playState = 'stop';
        },

        animateNotes: (self) => {
            const animTime = 500 / (parseInt(self.state.tempo) / 60);
            const freqs = applyKey(self.state.clef, self.state.key);
            let i = 0;
            let accidentalMap = makeStaffMap();
            let beats = 0;
            let isSet = false;
            self.state.playState = 'play'
            const notes = self.state.elements;
            let interval = setInterval(() => {
                if (i === notes.length) {
                    self.context.suspend();
                    self.state.playState = 'stop'
                    clearInterval(interval);
                    return;
                }
                if (notes[i].type === 'accidental') {
                    const classLst = notes[i].htmlElement.children[0].className.split(' ');
                    const type = classLst[0].slice(1, classLst[0].length);
                    const pos = classLst[classLst.length - 1];
                    accidentalMap[pos] = pos + type;
                    i++;
                    if (i === notes.length) {
                        return;
                    }
                }
                else if (notes[i].type === 'bar') {
                    accidentalMap = makeStaffMap();
                    i++;
                    if (i === notes.length) {
                        return;
                    }
                }

                if (notes[i].type === 'accidental' || notes[i].type === 'bar') {
                    return;
                }

                if (self.state.playState === 'stop') {
                    self.context.suspend();

                    let element;
                    for (element of notes[i].htmlElement.children) {
                        const elements = element.className.split(' ');
                        if (element.nodeName === "DIV" && elements[elements.length - 1] === '_red') {
                            element.className = element.className.slice(0, element.className.length - 5);
                        } else {
                            element.src = '/assets/quarterrest.png';
                        }
                    }

                    self.state.playState = 'stop'
                    clearInterval(interval);
                } else if (self.state.playState === 'play') {
                    if (isSet && beats === 0) {
                        let element;
                        for (element of notes[i].htmlElement.children) {
                            if (element.nodeName === "DIV") {
                                element.className = element.className.slice(0, element.className.length - 5);
                            } else {
                                element.src = '/assets/quarterrest.png';
                            }
                        }
                        if (notes[i].type === 'note') {
                            self.context.suspend();
                        }

                        i++;
                        isSet = false;
                    } else if (beats !== 0) {
                        beats--;
                    }
                    else {
                        let element;
                        for (element of notes[i].htmlElement.children) {
                            if (element.nodeName === "DIV") {
                                element.className = `${element.className} _red`;
                            } else {
                                element.src = '/assets/quarterrestred.png';
                            }
                        }
                        if (notes[i].type === 'note') {
                            self.state.oscillator.frequency.setTargetAtTime(freqs[accidentalMap[notes[i].htmlElement.children[0].className.split(' ')[1]]], 
                            self.context.currentTime, 0);
                            if (!self.state.isStarted) {
                                self.state.oscillator.start(0);
                                self.state.isStarted = true;
                            } else {
                                self.context.resume();
                            }
                        }
                        beats = notes[i].count - 1;
                        isSet = true;
                    }
                }
            }, animTime);
        },

        generateDashboardStaffInfo: (self, div, type) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                if (self.state.dashboardElement === div) {
                    self.state.destroyDashboard();
                    return;
                } else if (self.state.destroyDashboard) {
                    self.state.destroyDashboard();
                }
                self.state.dashboardElement = div;

                const dashboardContainer =  document.createElement('div');
                dashboardContainer.className = '_dashboardContainerInfo';
                
                const divPos = getDivPosition(div, true);

                if (type === 'key') {
                    const circleOfFifths = defineCircleofFifths();
                    const type = circleOfFifths[self.state.key].type;
                    dashboardContainer.style = `height: ${self.state.height}px; top: ${divPos[0]}px;` + 
                    `left: ${divPos[1] + 1 + ((type === 'sharp') ? 12.15 : 11.1333)*(circleOfFifths[self.state.key].num + 1)}px`;

                    let element;
                    for (element of div.children) {
                        element.children[0].src = `${element.children[0].src.slice(0, element.children[0].src.length - 4)}red.png`;
                    }

                    const changeKeyHeader =  document.createElement('div');
                    changeKeyHeader.appendChild(document.createTextNode('Key'));
                    dashboardContainer.appendChild(changeKeyHeader);

                    const changeKey =  document.createElement('input');
                    changeKey.id = '_changeKeyInput';
                    changeKey.className = '_dashboardStaffInfoText';
                    changeKey.value = self.state.key;
                    changeKey.type = 'text';
                    changeKey.maxlength = '2';
                    changeKey.size = '2';
                    dashboardContainer.appendChild(changeKey);

                    const buttonContainer =  document.createElement('div');
                    const changeKeySubmit =  document.createElement('input');
                    changeKeySubmit.className = '_dashboardStaffInfoSubmit';
                    changeKeySubmit.type = 'submit';
                    changeKeySubmit.value = 'Change';
                    buttonContainer.appendChild(changeKeySubmit);
                    dashboardContainer.appendChild(buttonContainer);

                    changeKeySubmit.addEventListener('click', StaffPrivateFuncs.changeKey(self, div));

                    self.state.destroyDashboard = StaffPrivateFuncs.closeDashboard(self, dashboardContainer, div, false);
                } else {
                    dashboardContainer.style = `height: ${self.state.height}px; top: ${divPos[0]}px; left: ${divPos[1] + 30}px;`;
                    div.style.color = 'red';

                    const changeTimeHeader =  document.createElement('div');
                    changeTimeHeader.appendChild(document.createTextNode('Time Signature'));
                    dashboardContainer.appendChild(changeTimeHeader);

                    const changeTimeSig1 =  document.createElement('input');
                    changeTimeSig1.id = '_changeTimeSig1Input';
                    changeTimeSig1.style = `font-size: ${self.state.height / 10}px`;
                    changeTimeSig1.className = '_dashboardStaffInfoText';
                    changeTimeSig1.type = 'number';
                    changeTimeSig1.value = self.state.timeSignature[0];
                    changeTimeSig1.size = '1';
                    changeTimeSig1.maxlength = '1';
                    changeTimeSig1.min = '0';
                    changeTimeSig1.max = '9';
                    dashboardContainer.appendChild(changeTimeSig1);

                    dashboardContainer.appendChild(document.createElement('br'));

                    const changeTimeSig2 =  document.createElement('input');
                    changeTimeSig2.id = '_changeTimeSig2Input';
                    changeTimeSig2.style = `font-size: ${self.state.height / 10}px`;
                    changeTimeSig2.className = '_dashboardStaffInfoText';
                    changeTimeSig2.type = 'number';
                    changeTimeSig2.value = self.state.timeSignature[2];
                    changeTimeSig2.size = '1';
                    changeTimeSig2.maxlength = '1';
                    changeTimeSig2.min = '0';
                    changeTimeSig2.max = '9';
                    dashboardContainer.appendChild(changeTimeSig2);


                    const buttonContainer =  document.createElement('div');
                    const changeTimeSubmit =  document.createElement('input');
                    changeTimeSubmit.className = '_dashboardStaffInfoSubmit';
                    changeTimeSubmit.type = 'submit';
                    changeTimeSubmit.value = 'Change';
                    buttonContainer.appendChild(changeTimeSubmit);
                    dashboardContainer.appendChild(buttonContainer);

                    changeTimeSubmit.addEventListener('click', StaffPrivateFuncs.changeTimeSig(self, div));

                    self.state.destroyDashboard = StaffPrivateFuncs.closeDashboard(self, dashboardContainer, div, true);
                }

                if (self.state.container === 'body') {
                    document.querySelector(self.state.container).appendChild(dashboardContainer);
                    return;
                }
                document.getElementById(self.state.container).appendChild(dashboardContainer);
            };
        },

        generateDashboardMovable: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                if (self.state.dashboardElement === div) {
                    self.state.destroyDashboard();
                    return;
                } else if (self.state.destroyDashboard) {
                    self.state.destroyDashboard();
                }
                self.state.dashboardElement = div;

                const dashboardContainer =  document.createElement('div');
                dashboardContainer.className = '_dashboardContainer';

                const divPos = getDivPosition(div, false);
                dashboardContainer.style = `height: ${self.state.height}px; width: ${self.state.height / 2}px; top: ${divPos[0]}px; `
                + `left: ${divPos[1] - (self.state.height / 2) - (self.state.height / 10)}px;`

                let type = 'note';
                let element;
                for (element of div.children) {
                    if (element.nodeName === "DIV") {
                        element.className = `${element.className} _red`;
                    } else {
                        element.src = `${element.src.slice(0, element.src.length - 4)}red.png`;
                        type = 'accidental';
                    }
                }

                if (type === 'note') {
                    const freq = applyKey(self.state.clef, self.state.key);
                    const accidentalMap = StaffPrivateFuncs.getContext(self, div);
                    self.state.oscillator.frequency.setTargetAtTime(freq[accidentalMap[div.children[0].className.split(' ')[1]]], 
                    self.context.currentTime, 0);
                    if (!self.state.isStarted) {
                        self.state.oscillator.start(0);
                        self.state.isStarted = true;
                    } else {
                        self.context.resume();
                    }
                    setTimeout(() => {  
                        self.context.suspend(); 
                    }, 200);
                }

                const upButton =  document.createElement('img');
                upButton.className = '_dashboardMovableButton';
                upButton.src = '/assets/up.png';
                upButton.title = `Shift ${type} Up`;
                upButton.addEventListener('click', StaffPrivateFuncs.moveUp(self, type, div));
                dashboardContainer.appendChild(upButton);

                const changeButton =  document.createElement('img');
                changeButton.className = '_dashboardMovableButton';
                changeButton.src = '/assets/change.png';
                changeButton.title = `Change ${type}`;
                changeButton.addEventListener('click', (type === 'note') ? StaffPrivateFuncs.changeNote(self, div) : StaffPrivateFuncs.changeAccidental(self, div));
                dashboardContainer.appendChild(changeButton);

                const deleteButton =  document.createElement('img');
                deleteButton.className = '_dashboardMovableButton';
                deleteButton.src = '/assets/trash.png';
                deleteButton.title = `Delete ${type}`;
                deleteButton.addEventListener('click', (type === 'note') ? StaffPrivateFuncs.deleteElement(self, div, true) : StaffPrivateFuncs.deleteElement(self, div, false));
                dashboardContainer.appendChild(deleteButton);

                const downButton =  document.createElement('img');
                downButton.className = '_dashboardMovableButton';
                downButton.src = '/assets/down.png';
                downButton.title = `Shift ${type} Down`;
                downButton.addEventListener('click', StaffPrivateFuncs.moveDown(self, type, div));
                dashboardContainer.appendChild(downButton);

                self.state.destroyDashboard = StaffPrivateFuncs.closeDashboard(self, dashboardContainer, div, false)

                if (self.state.container === 'body') {
                    document.querySelector(self.state.container).appendChild(dashboardContainer);
                    return;
                }
                document.getElementById(self.state.container).appendChild(dashboardContainer);
            };
        },

        generateDashboardImmovable: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                if (self.state.dashboardElement === div) {
                    self.state.destroyDashboard();
                    return;
                } else if (self.state.destroyDashboard) {
                    self.state.destroyDashboard();
                }
                self.state.dashboardElement = div;

                const dashboardContainer =  document.createElement('div');
                dashboardContainer.className = '_dashboardContainer';

                const divPos = getDivPosition(div, false);
                dashboardContainer.style = `height: ${self.state.height}px; width: ${self.state.height / 2}px; top: ${divPos[0]}px; left: ${divPos[1] - (self.state.height / 2) - (self.state.height / 10)}px;`

                let element;
                for (element of div.children) {
                    if (element.nodeName === "DIV") {
                        element.className = `${element.className} _red`;
                    } else {
                        element.src = `${element.src.slice(0, element.src.length - 4)}red.png`;
                    }
                }

                if (div.children[0].className === "_endingBar _red" || div.children[0].className === "_bar _red") {
                    const barClass = (div.children[0].className === "_endingBar _red") ? 'EndBar' : 'Bar';
                    const addAccidentalButton =  document.createElement('img');
                    addAccidentalButton.className = `_dashboard${barClass}Button`;
                    addAccidentalButton.src = '/assets/sharp.png';
                    addAccidentalButton.title = `Add accidental`;
                    addAccidentalButton.addEventListener('click', () => {
                        const accidental = StaffPrivateFuncs.generateAccidental(self, "sharpAccidental", "space2", true);
                        if (barClass === 'EndBar') {
                            self.state.elements.push(accidental);
                        } else {
                            const index = self.state.elements.findIndex((element) => {
                                return element.htmlElement.id === div.id;
                            });
                            self.state.elements.splice(index, 0, accidental);
                        }
                        div.parentNode.insertBefore(accidental.htmlElement, div);
                    });
                    dashboardContainer.appendChild(addAccidentalButton);

                    const addNoteButton =  document.createElement('img');
                    addNoteButton.className = `_dashboard${barClass}Button`;
                    addNoteButton.src = '/assets/note.png';
                    addNoteButton.title = `Add note`;
                    addNoteButton.addEventListener('click', () => {
                        const note = StaffPrivateFuncs.generateNote(self, "quarterNote", "space2", true);
                        if (barClass === 'EndBar') {
                            self.state.elements.push(note);
                        } else {
                            const index = self.state.elements.findIndex((element) => {
                                return element.htmlElement.id === div.id;
                            });
                            self.state.elements.splice(index, 0, note);
                        }
                        div.parentNode.insertBefore(note.htmlElement, div);
                    });
                    dashboardContainer.appendChild(addNoteButton);

                    const addBarButton =  document.createElement('img');
                    addBarButton.className = `_dashboard${barClass}Button`;
                    addBarButton.src = '/assets/add.png';
                    addBarButton.title = `Add bar`;
                    addBarButton.addEventListener('click', () => {
                        const bar = StaffPrivateFuncs.generateBar(self, true);
                        if (barClass === 'EndBar') {
                            self.state.elements.push(bar);
                        } else {
                            const index = self.state.elements.findIndex((element) => {
                                return element.htmlElement.id === div.id;
                            });
                            self.state.elements.splice(index, 0, bar);
                        }
                        div.parentNode.insertBefore(bar.htmlElement, div);
                    });
                    dashboardContainer.appendChild(addBarButton);

                    const addRestButton =  document.createElement('img');
                    addRestButton.className = `_dashboard${barClass}Button`;
                    addRestButton.src = '/assets/quarterrest.png';
                    addRestButton.title = `Add rest`;
                    addRestButton.addEventListener('click', () => {
                        const rest = StaffPrivateFuncs.generateRest(self, "quarterRest", true);
                        if (barClass === 'EndBar') {
                            self.state.elements.push(rest);
                        } else {
                            const index = self.state.elements.findIndex((element) => {
                                return element.htmlElement.id === div.id;
                            });
                            self.state.elements.splice(index, 0, rest);
                        }
                        div.parentNode.insertBefore(rest.htmlElement, div);
                    });
                    dashboardContainer.appendChild(addRestButton);
                }

                let type, deleteButton;
                if (div.children[0].className === "_bar _red") {
                    type = 'bar';
                    deleteButton =  document.createElement('img');
                    deleteButton.className = '_dashboardBarButton';
                } else if (div.children[0].className !== "_endingBar _red") {
                    type = 'rest';
                    deleteButton =  document.createElement('img');
                    deleteButton.className = '_dashboardRestButton';

                    const changeButton =  document.createElement('img');
                    changeButton.className = '_dashboardRestButton';
                    changeButton.src = '/assets/change.png';
                    changeButton.title = `Change rest`;
                    changeButton.addEventListener('click', StaffPrivateFuncs.changeRest(self, div));
                    dashboardContainer.appendChild(changeButton);
                }

                if (div.children[0].className !== "_endingBar _red") {
                    deleteButton.src = '/assets/trash.png';
                    deleteButton.title = `Delete ${type}`;
                    deleteButton.addEventListener('click', StaffPrivateFuncs.deleteElement(self, div, true));
                    dashboardContainer.appendChild(deleteButton);
                }

                self.state.destroyDashboard = StaffPrivateFuncs.closeDashboard(self, dashboardContainer, div, false);

                if (self.state.container === 'body') {
                    document.querySelector(self.state.container).appendChild(dashboardContainer);
                    return;
                }
                document.getElementById(self.state.container).appendChild(dashboardContainer);
            };
        },

        closeDashboard: (self, dashboard, div, isTimeSig) => {
            return () => {
                if (!isTimeSig) {
                let element;
                for (element of div.children) {
                    if (element.nodeName === "DIV") {
                        if (element.children[0] && element.children[0].nodeName === "IMG") {
                            element.children[0].src = `${element.children[0].src.slice(0, element.children[0].src.length - 7)}.png`;
                        } else {
                            element.className = element.className.slice(0, element.className.length - 5);
                        }
                    } else {
                        element.src = `${element.src.slice(0, element.src.length - 7)}.png`;
                    }
                }
                } else {
                div.style.color = 'black';
                }
                dashboard.parentNode.removeChild(dashboard);
                self.state.dashboardElement = null;
                self.state.destroyDashboard = null;
            };
        },

        moveUp: (self, type, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                let element;
                for (element of div.children) {
                    element.className = element.className.split(' ').map((val) => {
                        if (val === '_space5') {
                            return val;
                        } else if (val.slice(0, 5) === '_line') {
                            return '_space' + val.slice(5, 6);
                        } else if (val.slice(0, 6) === '_space') {
                            return `_line${parseInt(val.slice(6, 7)) + 1}`;
                        }
                        return val;
                    }).join(' ');
                }
                const freq = applyKey(self.state.clef, self.state.key);
                const accidentalMap = StaffPrivateFuncs.getContext(self, div);
                if (type === 'note') {
                    self.state.oscillator.frequency.setTargetAtTime(freq[accidentalMap[div.children[0].className.split(' ')[1]]], self.context.currentTime, 0);
                    if (!self.state.isStarted) {
                        self.state.oscillator.start(0);
                        self.state.isStarted = true;
                    } else {
                        self.context.resume();
                    }
                    setTimeout(() => {  
                        self.context.suspend(); 
                    }, 200);
                }
            };
        },

        moveDown: (self, type, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                let element;
                for (element of div.children) {
                    element.className = element.className.split(' ').map((val) => {
                        if (val === '_space0') {
                            return val;
                        } else if (val.slice(0, 5) === '_line') {
                            return `_space${parseInt(val.slice(5, 6)) - 1}`
                        } else if (val.slice(0, 6) === '_space') {
                            return '_line' + val.slice(6, 7);;
                        }
                        else return val;
                    }).join(' ');
                }
                const freq = applyKey(self.state.clef, self.state.key);
                const accidentalMap = StaffPrivateFuncs.getContext(self, div);
                if (type === 'note') {
                    self.state.oscillator.frequency.setTargetAtTime(freq[accidentalMap[div.children[0].className.split(' ')[1]]], self.context.currentTime, 0);
                    if (!self.state.isStarted) {
                        self.state.oscillator.start(0);
                        self.state.isStarted = true;
                    } else {
                        self.context.resume();
                    }
                    setTimeout(() => {  
                        self.context.suspend(); 
                    }, 200);
                }
            };
        },

        replaceElement: (self, id, newElement) => {
            self.state.elements = self.state.elements.map((element) => {
                if (element.htmlElement.id === id) {
                    return newElement;
                }
                return element
            });
        },

        changeNote: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                const len = div.children.length;
                const pos = div.children[0].className.split(' ')[1];
                let newNote;
                if (len === 1) {
                    newNote = StaffPrivateFuncs.generateNote(self, "quarterNote", pos.slice(1, pos.length), true);
                } else if (div.children[1].children.length === 1) {
                    newNote = StaffPrivateFuncs.generateNote(self, "wholeNote", pos.slice(1, pos.length), true);
                } else {
                    newNote = StaffPrivateFuncs.generateNote(self, "halfNote", pos.slice(1, pos.length), true);
                }

                self.state.destroyDashboard();

                newNote.htmlElement.id = div.id;
                StaffPrivateFuncs.replaceElement(self, div.id, newNote);

                div.parentNode.replaceChild(newNote.htmlElement, div);
                StaffPrivateFuncs.generateDashboardMovable(self, newNote.htmlElement)();
            };
        },

        changeAccidental: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                const accidental = div.children[0];
                const classLst = accidental.className.split(' ');
                const pos = classLst[classLst.length - 1];

                let newAccidental;
                if (classLst[0] === '_sharp') {
                    newAccidental = StaffPrivateFuncs.generateAccidental(self, "flatAccidental", pos.slice(1, pos.length), true);
                } else if (classLst[0] === '_flat') {
                    newAccidental = StaffPrivateFuncs.generateAccidental(self, "naturalAccidental", pos.slice(1, pos.length), true);
                } else {
                    newAccidental = StaffPrivateFuncs.generateAccidental(self, "sharpAccidental", pos.slice(1, pos.length), true);
                }

                self.state.destroyDashboard();

                newAccidental.htmlElement.id = div.id;
                StaffPrivateFuncs.replaceElement(self, div.id, newAccidental);

                div.parentNode.replaceChild(newAccidental.htmlElement, div);
                StaffPrivateFuncs.generateDashboardMovable(self, newAccidental.htmlElement)();
            };
        },

        changeRest: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                let newRest;
                if (div.children[0].className === `_hatRest _under _red`) {
                    newRest = StaffPrivateFuncs.generateRest(self, "quarterRest", true);
                } else if (div.children[0].className === `_quarterRest`) {
                    newRest = StaffPrivateFuncs.generateRest(self, "halfRest", true);
                } else {
                    newRest = StaffPrivateFuncs.generateRest(self, "wholeRest", true);
                }

                self.state.destroyDashboard();

                newRest.htmlElement.id = div.id;
                StaffPrivateFuncs.replaceElement(self, div.id, newRest);

                div.parentNode.replaceChild(newRest.htmlElement, div);
                StaffPrivateFuncs.generateDashboardImmovable(self, newRest.htmlElement)();
            };
        },

        deleteElement: (self, div, updateArray) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                self.state.destroyDashboard();

                if (updateArray) {
                    self.state.elements = self.state.elements.filter((element) => {
                        return div.id !== element.htmlElement.id;
                    });
                }

                div.parentNode.removeChild(div);
            };
        },

        changeClef: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                if(self.state.dashboardElement !== null) {
                    self.state.destroyDashboard();
                }
                self.state.clef = (self.state.clef === 'treble') ? 'bass' : 'treble';
                div.parentNode.parentNode.replaceChild(StaffPrivateFuncs.buildStaffData(self), div.parentNode);
            };
        },

        changeTempo: (self) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                const tempo = document.getElementById("_changeTempoInput").value;
                if (parseInt(tempo)) {
                    self.state.tempo = parseInt(tempo);
                }
            };
        },

        changeKey: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                const circleOfFifths = defineCircleofFifths();
                const key = document.getElementById("_changeKeyInput").value;
                if (circleOfFifths[key]) {
                self.state.key = key;
                const newStaff = StaffPrivateFuncs.buildStaffData(self);
                div.parentNode.parentNode.replaceChild(newStaff, div.parentNode);
                self.state.destroyDashboard();
                StaffPrivateFuncs.generateDashboardStaffInfo(self, newStaff.children[1], 'key')();
                }
            };
        },

        changeTimeSig: (self, div) => {
            return () => {
                StaffPrivateFuncs.stop(self)
                const timeSignatureTop = document.getElementById("_changeTimeSig1Input").value;
                const timeSignatureBottom = document.getElementById("_changeTimeSig2Input").value;
                if (parseInt(timeSignatureTop) || parseInt(timeSignatureBottom)) {
                self.state.timeSignature = timeSignatureTop + '/' + timeSignatureBottom;
                const newStaff = StaffPrivateFuncs.buildStaffData(self);
                div.parentNode.parentNode.replaceChild(newStaff, div.parentNode);
                self.state.destroyDashboard();
                StaffPrivateFuncs.generateDashboardStaffInfo(self, newStaff.children[2], 'time')();
                }
            };
        },

        getContext: (self, div) => {
            let accidentalMap = makeStaffMap();
            let element;
            for (element of self.state.elements) {
                if (element.type === 'accidental') {
                    const classLst = element.htmlElement.children[0].className.split(' ');
                    const type = classLst[0].slice(1, classLst[0].length);
                    const pos = classLst[classLst.length - 1];
                    accidentalMap[pos] = pos + type;
                } else if (element.type === 'bar') {
                    accidentalMap = makeStaffMap();
                } else if (div.id === element.htmlElement.id) {
                    return accidentalMap;
                }
            }
            return accidentalMap;
        }
    };

	global.Staff = global.Staff || Staff;

})(window, window.document);