var gl; // Un variable global para el contexto WebGL

function iniciarWebGL(canvas) {
  try {
      gl = canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl");
          if(gl){
              console.log('WebGL iniciado con éxito');
          }
  } catch (error) {
      if (!gl) {
          alert("No se pudo iniciar WebGL");
      }
  }
  return gl;
}

function iniciarCanvas(gl){
    gl.clearColor(0.96, 0.96, 0.96, 1.0);                      // Establecer el color base en negro, totalmente opaco
    gl.enable(gl.DEPTH_TEST);                               // Habilitar prueba de profundidad
    gl.depthFunc(gl.LEQUAL);                                // Objetos cercanos opacan objetos lejanos
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);  // Limpiar el buffer de color asi como el de profundidad
}

function start() {
  var canvas = document.getElementById("webgl-canvas");

  gl = iniciarWebGL(canvas);      // Inicializar el contexto GL
  
  // Solo continuar si WebGL esta disponible y trabajando
  
  if (gl) {
        iniciarCanvas(gl);
  }
}
$(function () {
  start();
})