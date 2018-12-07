var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var lyr_Meanchlorophyllaconcentration_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_2 = new ol.format.GeoJSON();
var features_Humpbacksightings_2 = format_Humpbacksightings_2.readFeatures(json_Humpbacksightings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_2.addFeatures(features_Humpbacksightings_2);var lyr_Humpbacksightings_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_2, 
                style: style_Humpbacksightings_2,
                title: '<img src="styles/legend/Humpbacksightings_2.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_3.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_4 = new ol.format.GeoJSON();
var features_Humpbacksightings_4 = format_Humpbacksightings_4.readFeatures(json_Humpbacksightings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_4.addFeatures(features_Humpbacksightings_4);var lyr_Humpbacksightings_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_4, 
                style: style_Humpbacksightings_4,
                title: '<img src="styles/legend/Humpbacksightings_4.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_5.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_6 = new ol.format.GeoJSON();
var features_Humpbacksightings_6 = format_Humpbacksightings_6.readFeatures(json_Humpbacksightings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_6.addFeatures(features_Humpbacksightings_6);var lyr_Humpbacksightings_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_6, 
                style: style_Humpbacksightings_6,
                title: '<img src="styles/legend/Humpbacksightings_6.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_7.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_8 = new ol.format.GeoJSON();
var features_Humpbacksightings_8 = format_Humpbacksightings_8.readFeatures(json_Humpbacksightings_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_8.addFeatures(features_Humpbacksightings_8);var lyr_Humpbacksightings_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_8, 
                style: style_Humpbacksightings_8,
                title: '<img src="styles/legend/Humpbacksightings_8.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_9.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_10 = new ol.format.GeoJSON();
var features_Humpbacksightings_10 = format_Humpbacksightings_10.readFeatures(json_Humpbacksightings_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_10.addFeatures(features_Humpbacksightings_10);var lyr_Humpbacksightings_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_10, 
                style: style_Humpbacksightings_10,
                title: '<img src="styles/legend/Humpbacksightings_10.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_11.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_12 = new ol.format.GeoJSON();
var features_Humpbacksightings_12 = format_Humpbacksightings_12.readFeatures(json_Humpbacksightings_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_12.addFeatures(features_Humpbacksightings_12);var lyr_Humpbacksightings_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_12, 
                style: style_Humpbacksightings_12,
                title: '<img src="styles/legend/Humpbacksightings_12.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_13.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_14 = new ol.format.GeoJSON();
var features_Humpbacksightings_14 = format_Humpbacksightings_14.readFeatures(json_Humpbacksightings_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_14.addFeatures(features_Humpbacksightings_14);var lyr_Humpbacksightings_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_14, 
                style: style_Humpbacksightings_14,
                title: '<img src="styles/legend/Humpbacksightings_14.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_15.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_16 = new ol.format.GeoJSON();
var features_Humpbacksightings_16 = format_Humpbacksightings_16.readFeatures(json_Humpbacksightings_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_16.addFeatures(features_Humpbacksightings_16);var lyr_Humpbacksightings_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_16, 
                style: style_Humpbacksightings_16,
                title: '<img src="styles/legend/Humpbacksightings_16.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_17.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_18 = new ol.format.GeoJSON();
var features_Humpbacksightings_18 = format_Humpbacksightings_18.readFeatures(json_Humpbacksightings_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_18 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_18.addFeatures(features_Humpbacksightings_18);var lyr_Humpbacksightings_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_18, 
                style: style_Humpbacksightings_18,
                title: '<img src="styles/legend/Humpbacksightings_18.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_19.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_20 = new ol.format.GeoJSON();
var features_Humpbacksightings_20 = format_Humpbacksightings_20.readFeatures(json_Humpbacksightings_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_20 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_20.addFeatures(features_Humpbacksightings_20);var lyr_Humpbacksightings_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_20, 
                style: style_Humpbacksightings_20,
                title: '<img src="styles/legend/Humpbacksightings_20.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_21.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_22 = new ol.format.GeoJSON();
var features_Humpbacksightings_22 = format_Humpbacksightings_22.readFeatures(json_Humpbacksightings_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_22 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_22.addFeatures(features_Humpbacksightings_22);var lyr_Humpbacksightings_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_22, 
                style: style_Humpbacksightings_22,
                title: '<img src="styles/legend/Humpbacksightings_22.png" /> Humpback sightings'
            });var lyr_Meanchlorophyllaconcentration_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mean chlorophyll a concentration ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Meanchlorophyllaconcentration_23.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13419145.259488, 3974663.067603, -13247782.541024, 4111373.996575]
                            })
                        });var format_Humpbacksightings_24 = new ol.format.GeoJSON();
var features_Humpbacksightings_24 = format_Humpbacksightings_24.readFeatures(json_Humpbacksightings_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humpbacksightings_24 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Humpbacksightings_24.addFeatures(features_Humpbacksightings_24);var lyr_Humpbacksightings_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Humpbacksightings_24, 
                style: style_Humpbacksightings_24,
                title: '<img src="styles/legend/Humpbacksightings_24.png" /> Humpback sightings'
            });
var group_January = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_23,lyr_Humpbacksightings_24,],
                                title: "January"});
var group_February = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_21,lyr_Humpbacksightings_22,],
                                title: "February"});
var group_March = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_19,lyr_Humpbacksightings_20,],
                                title: "March"});
var group_April = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_17,lyr_Humpbacksightings_18,],
                                title: "April"});
var group_May = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_15,lyr_Humpbacksightings_16,],
                                title: "May"});
var group_June = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_13,lyr_Humpbacksightings_14,],
                                title: "June"});
var group_July = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_11,lyr_Humpbacksightings_12,],
                                title: "July"});
var group_August = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_9,lyr_Humpbacksightings_10,],
                                title: "August"});
var group_September = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_7,lyr_Humpbacksightings_8,],
                                title: "September"});
var group_October = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_5,lyr_Humpbacksightings_6,],
                                title: "October"});
var group_November = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_3,lyr_Humpbacksightings_4,],
                                title: "November"});
var group_December = new ol.layer.Group({
                                layers: [lyr_Meanchlorophyllaconcentration_1,lyr_Humpbacksightings_2,],
                                title: "December"});
var group_SantaBarbaraBasemap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Santa Barbara Basemap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Meanchlorophyllaconcentration_1.setVisible(false);lyr_Humpbacksightings_2.setVisible(false);lyr_Meanchlorophyllaconcentration_3.setVisible(false);lyr_Humpbacksightings_4.setVisible(false);lyr_Meanchlorophyllaconcentration_5.setVisible(false);lyr_Humpbacksightings_6.setVisible(false);lyr_Meanchlorophyllaconcentration_7.setVisible(false);lyr_Humpbacksightings_8.setVisible(false);lyr_Meanchlorophyllaconcentration_9.setVisible(false);lyr_Humpbacksightings_10.setVisible(false);lyr_Meanchlorophyllaconcentration_11.setVisible(false);lyr_Humpbacksightings_12.setVisible(false);lyr_Meanchlorophyllaconcentration_13.setVisible(false);lyr_Humpbacksightings_14.setVisible(false);lyr_Meanchlorophyllaconcentration_15.setVisible(false);lyr_Humpbacksightings_16.setVisible(false);lyr_Meanchlorophyllaconcentration_17.setVisible(false);lyr_Humpbacksightings_18.setVisible(false);lyr_Meanchlorophyllaconcentration_19.setVisible(false);lyr_Humpbacksightings_20.setVisible(false);lyr_Meanchlorophyllaconcentration_21.setVisible(false);lyr_Humpbacksightings_22.setVisible(false);lyr_Meanchlorophyllaconcentration_23.setVisible(true);lyr_Humpbacksightings_24.setVisible(true);
var layersList = [group_SantaBarbaraBasemap,group_December,group_November,group_October,group_September,group_August,group_July,group_June,group_May,group_April,group_March,group_February,group_January];
lyr_Humpbacksightings_2.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_4.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_6.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_8.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_10.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_12.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_14.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_16.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_18.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_20.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_22.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_24.set('fieldAliases', {'field_1': 'field_1', 'CINMS_Spec': 'CINMS_Spec', 'lat': 'lat', 'lon': 'lon', 'create_dat': 'create_dat', 'month': 'month', });
lyr_Humpbacksightings_2.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_4.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_6.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_8.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_10.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_12.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_14.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_16.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_18.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_20.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_22.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_24.set('fieldImages', {'field_1': '', 'CINMS_Spec': '', 'lat': '', 'lon': '', 'create_dat': '', 'month': '', });
lyr_Humpbacksightings_2.set('fieldLabels', {});
lyr_Humpbacksightings_4.set('fieldLabels', {});
lyr_Humpbacksightings_6.set('fieldLabels', {});
lyr_Humpbacksightings_8.set('fieldLabels', {});
lyr_Humpbacksightings_10.set('fieldLabels', {});
lyr_Humpbacksightings_12.set('fieldLabels', {});
lyr_Humpbacksightings_14.set('fieldLabels', {});
lyr_Humpbacksightings_16.set('fieldLabels', {});
lyr_Humpbacksightings_18.set('fieldLabels', {});
lyr_Humpbacksightings_20.set('fieldLabels', {});
lyr_Humpbacksightings_22.set('fieldLabels', {});
lyr_Humpbacksightings_24.set('fieldLabels', {});
lyr_Humpbacksightings_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});