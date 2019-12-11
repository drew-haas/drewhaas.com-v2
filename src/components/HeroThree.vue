<template>
  <div id="threeContainer" class="three-container"></div>
</template>

<script>
// import all THREE dependencies
import * as THREE from '../assets/scripts/three/three.module.js';
import { GUI } from '../assets/scripts/three/dat.gui.module.js';
import { OrbitControls } from '../assets/scripts/three/OrbitControls.js';
import { MarchingCubes } from '../assets/scripts/three/MarchingCubes.js';
import { ToonShaderDotted } from '../assets/scripts/three/ToonShader.js';
// import { ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted } from '../assets/scripts/three/ToonShader.js';

export default {
  name: "HomeThree",
  mounted() {

    var container;

    var camera, scene, raycaster, renderer;

    var materials, current_material;

    var light, pointLight, ambientLight;

    var effect, resolution;

    var effectController;

    var walls = false;

    var time = 0, theta = 0, radius = 100, mouseDelta = 0.3;

    var clock = new THREE.Clock();

    var mouse = new THREE.Vector2(), INTERSECTED;

    init();
    animate();

    function init() {

      container = document.getElementById( 'threeContainer' );

      // CAMERA

      camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
      // camera.position.set( 0, 0, 2400 );
      camera.position.set( 0, 0, 700 );

      // SCENE

      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xe8e8e8);
      scene.rotation.x = 0;
      scene.rotation.y = -150;

      // LIGHTS

      light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 0.5, 0.5, 1 );
      scene.add( light );

      pointLight = new THREE.PointLight( 0xff3300 );
      pointLight.position.set( 0, 0, 100 );
      scene.add( pointLight );

      ambientLight = new THREE.AmbientLight( 0x080808 );
      scene.add( ambientLight );

      // MATERIALS

      materials = generateMaterials();
      current_material = "dotted";

      // MARCHING CUBES

      resolution = 40;

      effect = new MarchingCubes( resolution, materials[ current_material ].m, true, true );
      effect.position.set( 0, 0, 0 );
      effect.scale.set( 700, 700, 700 );

      effect.enableUvs = false;
      effect.enableColors = false;

      scene.add( effect );

      raycaster = new THREE.Raycaster();

      // RENDERER

      renderer = new THREE.WebGLRenderer();
      renderer.gammaOutput = true;
      // renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );

      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0px";
      renderer.domElement.style.left = "0px";

      container.appendChild( renderer.domElement );

      // CONTROLS

      // var controls = new OrbitControls( camera, renderer.domElement );

      // GUI

      setupGui();

      // EVENTS

      window.addEventListener( 'resize', onWindowResize, false );
      window.addEventListener( 'mousemove', onDocumentMouseMove );

    }

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {
      event.preventDefault();

      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    }

    function generateMaterials() {

      // environment map

      var path = "textures/cube/SwedishRoyalCastle/";
      var format = '.jpg';
      var urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
      ];

      var cubeTextureLoader = new THREE.CubeTextureLoader();

      var reflectionCube = cubeTextureLoader.load( urls );
      var refractionCube = cubeTextureLoader.load( urls );
      refractionCube.mapping = THREE.CubeRefractionMapping;

      // toons

      var dottedMaterial = createShaderMaterial( ToonShaderDotted, light, ambientLight );

      var texture = new THREE.TextureLoader().load( "textures/uv_grid_opengl.jpg" );
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;

      var materials = {
        "dotted": {
          m: dottedMaterial,
          h: 0.2, s: 1, l: 0.9
        }
      };

      return materials;
    }

    function createShaderMaterial( shader, light, ambientLight ) {

      var u = THREE.UniformsUtils.clone( shader.uniforms );

      var vs = shader.vertexShader;
      var fs = shader.fragmentShader;

      var material = new THREE.ShaderMaterial( { uniforms: u, vertexShader: vs, fragmentShader: fs } );

      material.uniforms[ "uDirLightPos" ].value = light.position;
      material.uniforms[ "uDirLightColor" ].value = light.color;

      material.uniforms[ "uAmbientLightColor" ].value = ambientLight.color;

      return material;

    }


    function setupGui() {

      var createHandler = function ( id ) {

        return function () {

          var mat_old = materials[ current_material ];
          mat_old.h = m_h.getValue();
          mat_old.s = m_s.getValue();
          mat_old.l = m_l.getValue();

          current_material = id;

          var mat = materials[ id ];
          effect.material = mat.m;

          m_h.setValue( mat.h );
          m_s.setValue( mat.s );
          m_l.setValue( mat.l );

          effect.enableUvs = ( current_material === "textured" ) ? true : false;
          effect.enableColors = ( current_material === "colors" || current_material === "multiColors" ) ? true : false;

        };

      };

      effectController = {

        material: "dotted",

        mouseSize: 1,

        speed: 1.0,
        numBlobs: 7,
        resolution: 40,
        isolation: 80,

        floor: walls ? true : false,
        wallx: walls ? true : false,
        wallz: walls ? true : false,

        hue: 0.3,
        saturation: 0.05,
        lightness: .95,

        lhue: 0.04,
        lsaturation: 1.0,
        llightness: 0.1,

        lx: 0.5,
        ly: 0.5,
        lz: 1.0,

        dummy: function () {}

      };

      var h, m_h, m_s, m_l;

      var gui = new GUI();

      // material (type)

      h = gui.addFolder( "Materials" );

      for ( var m in materials ) {

        effectController[ m ] = createHandler( m );
        h.add( effectController, m ).name( m );

      }

      // material (color)

      h = gui.addFolder( "Material color" );

      m_h = h.add( effectController, "hue", 0.0, 1.0, 0.025 );
      m_s = h.add( effectController, "saturation", 0.0, 1.0, 0.025 );
      m_l = h.add( effectController, "lightness", 0.0, 1.0, 0.025 );

      // light (point)

      h = gui.addFolder( "Point light color" );

      h.add( effectController, "lhue", 0.0, 1.0, 0.025 ).name( "hue" );
      h.add( effectController, "lsaturation", 0.0, 1.0, 0.025 ).name( "saturation" );
      h.add( effectController, "llightness", 0.0, 1.0, 0.025 ).name( "lightness" );

      // light (directional)

      h = gui.addFolder( "Directional light orientation" );

      h.add( effectController, "lx", - 1.0, 1.0, 0.025 ).name( "x" );
      h.add( effectController, "ly", - 1.0, 1.0, 0.025 ).name( "y" );
      h.add( effectController, "lz", - 1.0, 1.0, 0.025 ).name( "z" );

      // simulation

      h = gui.addFolder( "Simulation" );

      h.add( effectController, "speed", 0.1, 8.0, 0.05 );
      h.add( effectController, "numBlobs", 1, 50, 1 );
      h.add( effectController, "resolution", 14, 100, 1 );
      h.add( effectController, "isolation", 10, 300, 1 );

      h.add( effectController, "floor" );
      h.add( effectController, "wallx" );
      h.add( effectController, "wallz" );

    }


    // this controls content of marching cubes voxel field

    function updateCubes( object, time, numblobs, floor, wallx, wallz ) {

      object.reset();

      // fill the field with some metaballs

      var i, ballx, bally, ballz, subtract, strength;
      var rainbow = [
        new THREE.Color( 0xff0000 ),
        new THREE.Color( 0xff7f00 ),
        new THREE.Color( 0xffff00 ),
        new THREE.Color( 0x00ff00 ),
        new THREE.Color( 0x0000ff ),
        new THREE.Color( 0x4b0082 ),
        new THREE.Color( 0x9400d3 )
      ];
      subtract = 12;
      strength = 1.2 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );

      for ( i = 0; i < numblobs; i ++ ) {

        ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.9;
        bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77; // dip into the floor
        ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

        object.addBall( ballx, bally, ballz, strength, subtract );

      }

      if ( floor ) object.addPlaneY( 2, 12 );
      if ( wallz ) object.addPlaneZ( 2, 12 );
      if ( wallx ) object.addPlaneX( 2, 12 );

    }

    function animate() {

      requestAnimationFrame( animate );

      render();

    }


    function render() {

      var delta = clock.getDelta();

      time += delta * effectController.speed * 0.3; // ANIMATION

      // marching cubes

      if ( effectController.resolution !== resolution ) {

        resolution = effectController.resolution;
        effect.init( Math.floor( resolution ) );

      }

      if ( effectController.isolation !== effect.isolation ) {

        effect.isolation = effectController.isolation;

      }

      updateCubes( effect, time, effectController.numBlobs, effectController.floor, effectController.wallx, effectController.wallz );

      // materials

      if ( effect.material instanceof THREE.ShaderMaterial ) {

        effect.material.uniforms[ "uBaseColor" ].value.setHSL( effectController.hue, effectController.saturation, effectController.lightness );

      } else {

        effect.material.color.setHSL( effectController.hue, effectController.saturation, effectController.lightness );

      }

      // lights

      light.position.set( effectController.lx, effectController.ly, effectController.lz );
      light.position.normalize();

      pointLight.color.setHSL( effectController.lhue, effectController.lsaturation, effectController.llightness );

      // mousemovement raycaster

      raycaster.setFromCamera( mouse, camera );

      var intersects = raycaster.intersectObjects( scene.children );

      if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

          if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

          INTERSECTED = intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
          INTERSECTED.material.emissive.setHex( 0xff0000 );

        }

      } else {

        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;

      }

      // render

      renderer.render( scene, camera );

    }
  }
};
</script>

<style lang="scss" scoped>
.three-container {
  position: fixed;
  opacity: .5;
}
</style>