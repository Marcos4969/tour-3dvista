(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer_mobile","this.MapViewer_mobile"],"backgroundColorRatios":[0],"class":"Player","scrollBarMargin":2,"layout":"absolute","watermark":false,"id":"rootPlayer","data":{"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1},"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true,"name":"Player584","history":{}},"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setValue":TDV.Tour.Script.setValue,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"clone":TDV.Tour.Script.clone,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizStart":TDV.Tour.Script.quizStart,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeJS":TDV.Tour.Script.executeJS,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"getKey":TDV.Tour.Script.getKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"init":TDV.Tour.Script.init,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showWindow":TDV.Tour.Script.showWindow,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"downloadFile":TDV.Tour.Script.downloadFile,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizShowScore":TDV.Tour.Script.quizShowScore,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"createTween":TDV.Tour.Script.createTween,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"existsKey":TDV.Tour.Script.existsKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"registerKey":TDV.Tour.Script.registerKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleVR":TDV.Tour.Script.toggleVR,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"enableVR":TDV.Tour.Script.enableVR,"translate":TDV.Tour.Script.translate,"disableVR":TDV.Tour.Script.disableVR,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setLocale":TDV.Tour.Script.setLocale},"minHeight":0,"start":"this.init(); this.playList_74DA530A_63AD_7E2B_41D0_EB2955AC06E4.set('selectedIndex', 0)","minWidth":0,"gap":10,"propagateClick":false,"scrollBarColor":"#000000","hash": "c576057ce8b07e23a2592376cc0b1161b010599018d39828a1fbc8065afe05dd", "definitions": [{"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_t.jpg","id":"panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA","hfov":360,"data":{"label":"360"},"vfov":180,"hfovMin":"135%","mapLocations":[{"y":1910.17,"class":"PanoramaMapLocation","map":"this.map_77C51A05_63DF_EE19_41D5_8259CCBDE41A","x":742.02}],"label":trans('panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA.label'),"frames":[{"thumbnailUrl":"media/panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2560,"url":"media/panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":5,"colCount":30,"width":15360},{"height":1536,"url":"media/panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3,"colCount":18,"width":9216},{"height":1024,"url":"media/panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"width":6144},{"height":512,"url":"media/panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"width":3072}]}}]},{"id":"MapViewer_mobileMapPlayer","movementMode":"constrained","class":"MapPlayer","viewerArea":"this.MapViewer_mobile"},{"class":"PanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true},{"class":"PanoramaCamera","id":"panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_camera","initialSequence":"this.sequence_696830CD_63AF_3A29_4183_222B951376DE","initialPosition":{"pitch":-3.38,"yaw":1.4,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true},{"id":"playList_74DA530A_63AD_7E2B_41D0_EB2955AC06E4","items":[{"player":"this.MapViewer_mobileMapPlayer","media":"this.map_77C51A05_63DF_EE19_41D5_8259CCBDE41A","begin":"this.MapViewer_mobileMapPlayer.set('movementMode', 'constrained')","class":"MapPlayListItem"}],"class":"PlayList"},{"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"class":"ViewerArea","progressBarBackgroundColorDirection":"horizontal","playbackBarBorderRadius":0,"toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadow":true,"subtitlesTextShadowVerticalLength":1,"progressBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","playbackBarHeadBorderRadius":0,"right":"1.31%","toolTipFontColor":"#606060","toolTipPaddingRight":3,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderSize":0,"toolTipPaddingLeft":3,"toolTipBorderColor":"#767676","subtitlesBottom":10,"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"propagateClick":false,"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","subtitlesFontFamily":"Arial","data":{"name":"Floorplan Viewer"},"progressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowBlurRadius":1,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowOpacity":1,"progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"progressBackgroundColor":["#000000"],"vrPointerColor":"#FFFFFF","id":"MapViewer_mobile","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarProgressBorderSize":0,"toolTipFontFamily":"Arial","subtitlesTop":0,"playbackBarProgressBorderRadius":0,"minHeight":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundColorDirection":"vertical","minWidth":1,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","progressBottom":10,"surfaceReticleSelectionColor":"#FFFFFF","top":"0.34%","toolTipBorderRadius":1,"width":"97.471%","toolTipShadowBlurRadius":1,"subtitlesBorderColor":"#FFFFFF","firstTransitionDuration":0,"height":"33.955%","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":1.5,"progressOpacity":0.7,"progressRight":"33%","subtitlesGap":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"subtitlesBackgroundColor":"#000000"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_74D5332C_63AD_7E6F_41CA_A62307BB6605"],"class":"PlayList"},{"fieldOfViewOverlayInsideOpacity":0.23,"fieldOfViewOverlayOutsideColor":"#000000","fieldOfViewOverlayInsideColor":"#FF0000","class":"Map","minimumZoomFactor":0.5,"fieldOfViewOverlayRadiusScale":0.39,"scaleMode":"fit_inside","thumbnailUrl":"media/map_77C51A05_63DF_EE19_41D5_8259CCBDE41A_t.jpg","overlays":["this.overlay_71489AF8_63D3_2FF7_41C0_9173B64DB050"],"data":{"label":"Cena_02"},"height":2160,"initialZoomFactor":1,"label":trans('map_77C51A05_63DF_EE19_41D5_8259CCBDE41A.label'),"id":"map_77C51A05_63DF_EE19_41D5_8259CCBDE41A","image":{"class":"ImageResource","levels":["this.imlevel_7517E106_63AD_7A1B_41CA_4692860643EB","this.imlevel_7517D106_63AD_7A1B_41CF_B3C887B6AFBA","this.imlevel_75173106_63AD_7A1B_41D1_5D32F6F95D85","this.imlevel_75172106_63AD_7A1B_41C8_B9FEE20D05CD","this.imlevel_75171106_63AD_7A1B_41D7_985BF83AAAA2"]},"width":1422,"maximumZoomFactor":1.2},{"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"class":"ViewerArea","playbackBarBorderRadius":0,"toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadow":true,"subtitlesTextShadowVerticalLength":1,"progressBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","playbackBarHeadBorderRadius":0,"toolTipFontColor":"#606060","toolTipPaddingRight":3,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderSize":0,"toolTipPaddingLeft":3,"propagateClick":false,"subtitlesBottom":50,"data":{"name":"Main Viewer"},"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"toolTipBorderColor":"#767676","vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","subtitlesFontFamily":"Arial","progressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowBlurRadius":1,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowOpacity":1,"progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"progressBackgroundColor":["#000000"],"vrPointerColor":"#FFFFFF","id":"MainViewer_mobile","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarProgressBorderSize":0,"toolTipFontFamily":"Arial","subtitlesTop":0,"playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundColorDirection":"vertical","minWidth":50,"minHeight":25,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","progressBottom":10,"surfaceReticleSelectionColor":"#FFFFFF","toolTipBorderRadius":1,"width":"100%","toolTipShadowBlurRadius":1,"top":274,"subtitlesBorderColor":"#FFFFFF","firstTransitionDuration":0,"height":"63.936%","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":1.5,"progressOpacity":0.7,"progressRight":"33%","subtitlesGap":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"playbackBarLeft":0,"subtitlesBackgroundColor":"#000000"},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_696830CD_63AF_3A29_4183_222B951376DE"},{"camera":"this.panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA_camera","media":"this.panorama_6FA47A41_63AF_EE19_41B1_82C00ECA84DA","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_74D5332C_63AD_7E6F_41CA_A62307BB6605","begin":"this.setMapLocation(this.PanoramaPlayListItem_74D5332C_63AD_7E6F_41CA_A62307BB6605, this.MapViewer_mobileMapPlayer)","end":"this.trigger('tourEnded')"},{"data":{"label":"Image"},"class":"AreaHotspotMapOverlay","rollOverDisplay":true,"id":"overlay_71489AF8_63D3_2FF7_41C0_9173B64DB050","image":{"data":{"label":"Image"},"height":81,"class":"HotspotMapOverlayImage","offsetY":40.5,"offsetX":41,"x":742.02,"scaleMode":"fit_inside","y":1910.17,"image":"this.res_70132FE5_63EC_E619_41D6_7597B9FB10D9","width":82},"areas":["this.HotspotMapOverlayArea_71F46B6A_63D3_2EEB_41D0_22A6CAA8AD4E"],"useHandCursor":true},{"height":4096,"url":trans('imlevel_7517E106_63AD_7A1B_41CA_4692860643EB.url'),"class":"ImageResourceLevel","id":"imlevel_7517E106_63AD_7A1B_41CA_4692860643EB","width":2696},{"height":2048,"url":trans('imlevel_7517D106_63AD_7A1B_41CF_B3C887B6AFBA.url'),"class":"ImageResourceLevel","id":"imlevel_7517D106_63AD_7A1B_41CF_B3C887B6AFBA","width":1348},{"height":1024,"url":trans('imlevel_75173106_63AD_7A1B_41D1_5D32F6F95D85.url'),"class":"ImageResourceLevel","id":"imlevel_75173106_63AD_7A1B_41D1_5D32F6F95D85","width":674},{"height":512,"url":trans('imlevel_75172106_63AD_7A1B_41C8_B9FEE20D05CD.url'),"class":"ImageResourceLevel","id":"imlevel_75172106_63AD_7A1B_41C8_B9FEE20D05CD","width":337},{"height":256,"url":trans('imlevel_75171106_63AD_7A1B_41D7_985BF83AAAA2.url'),"tags":"preload","class":"ImageResourceLevel","id":"imlevel_75171106_63AD_7A1B_41D7_985BF83AAAA2","width":168},{"id":"res_70132FE5_63EC_E619_41D6_7597B9FB10D9","levels":[{"height":81,"url":"media/res_70132FE5_63EC_E619_41D6_7597B9FB10D9_0.png","class":"ImageResourceLevel","width":82}],"class":"ImageResource"},{"id":"HotspotMapOverlayArea_71F46B6A_63D3_2EEB_41D0_22A6CAA8AD4E","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_74D5332C_63AD_7E6F_41CA_A62307BB6605, 1.3968957871396896, -3.3924611973392462, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotMapOverlayArea"}],"width":"100%","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.38, Sat Nov 8 2025