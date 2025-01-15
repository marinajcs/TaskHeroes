(function(window, undefined) {
  var dictionary = {
    "d90197ec-5f07-462f-823e-20d6d617012c": "Home",
    "5db5aebc-9caf-44b7-a8a4-679f59730104": "Registro",
    "71e57f4f-bc61-408a-827e-324a19dc6801": "Examenes Realizados",
    "c31d0c66-6e05-42d3-9975-3b4d1e1349bf": "Crear tarea",
    "e740226c-7d45-4a9b-97e2-a045780934b0": "Realizaar tarea",
    "df1a25d4-2e24-49f4-8498-697ddc0ae6f2": "Menu Examenes",
    "662eb0d7-61c3-4efb-86e2-38ccf8cf17d6": "Añadir examen",
    "d2e3c151-d8c9-47ff-9fec-3299fd5c87c2": "Detalles Tarea",
    "d02aa016-3c41-4bec-815b-76f0ecd80a64": "Modificar perfil",
    "ea66f3f2-1da6-4a96-9dda-7e4e3979cc9c": "Añadir nota",
    "e9985699-1bfb-4902-baf0-1318565957d1": "Recompensas",
    "bba1fa18-aad6-4824-b94f-b2b8f85dd5d1": "Perfil",
    "45191818-7e2a-4209-a3f2-4fe7fee19b13": "Evaluacion Diaria",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "4b9f7310-f1d9-4525-8adf-0356931544a6": "Organizar tarea",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);