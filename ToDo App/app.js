const app = new Vue({
    el:'#app',
    data: {
        titulo: 'To Do List App with VueJs',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = '';
            //Se le pasa al local storage, el array con las tareas (NO SE LE PASA CADA TAREA POR VEZ, SE LE PASA TODO EL ARRAY SE UNA, SE RESETEA CON LOS NUEVOS VALORES)
            //('nombre de la base de datos', que se guarda [se le agrega el JSON.stingify])
            localStorage.setItem('todo-local-vue', JSON.stringify(this.tareas))
        },
        editarTarea: function(i){
            //Para que vaya cambiando de uno a otro
            //this.tareas[i].estado = !this.tareas[i].estado;
            this.tareas[i].estado = true;
            localStorage.setItem('todo-local-vue', JSON.stringify(this.tareas))
        },
        eliminarTarea: function(i){
            this.tareas.splice(i, 1);
            localStorage.setItem('todo-local-vue', JSON.stringify(this.tareas))
        }
    },
    //LOCAL STORAGE
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('todo-local-vue'));
        //Primero se pregunta si en todo-local-vue hay algo guardado. Si no hay nada, las tareas empiezan vacias...
        if(datosDB === null){
            this.tareas = [];
        }else{
            //...pero si hay algo guardado, tareas va a tener ese valor
            this.tareas = datosDB;
        }
        
    }

});