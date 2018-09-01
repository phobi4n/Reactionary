var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "521",
                    "DialogWidth": "810"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "arrangement": "1",
                    "iconSize": "3",
                    "positions": "1,11,desktop:/org.kde.konsole.desktop,0,4,desktop:/firefox.desktop,0,1,desktop:/Home.desktop,0,0,desktop:/systemsettings.desktop,0,3,desktop:/org.kde.kmail2.desktop,0,2",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "59,110,165"
                },
                "/Wallpaper/org.kde.image/General": {
                    "FillMode": "2",
                    "Image": "file:///home/mark/Development/Reactionary/Reactionary.svg"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "FillMode": "2",
                    "Provider": "wcpotd"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "onlyGroupWhenFull": "false",
                            "sortingStrategy": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "10"
                        },
                        "/Configuration/Appearance": {
                            "enabledCalendarPlugins": "/opt/kf5/lib/plugins/plasmacalendarplugins/holidaysevents.so",
                            "selectedTimeZones": "Europe/London,Local"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "76",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2.5714285714285716,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 137.14285714285714,
            "minimumLength": 137.14285714285714,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
