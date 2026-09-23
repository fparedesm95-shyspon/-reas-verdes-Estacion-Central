var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Fotos_1 = new ol.format.GeoJSON();
var features_Fotos_1 = format_Fotos_1.readFeatures(json_Fotos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fotos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fotos_1.addFeatures(features_Fotos_1);
var lyr_Fotos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fotos_1, 
                style: style_Fotos_1,
                popuplayertitle: 'Fotos',
                interactive: true,
                title: '<img src="styles/legend/Fotos_1.png" /> Fotos'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Fotos_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Fotos_1];
lyr_Fotos_1.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Fotos_1.set('fieldImages', {'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_Fotos_1.set('fieldLabels', {'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'inline label - always visible', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', 'timestamp': 'header label - visible with data', });
lyr_Fotos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});