al crear posteo:
-description
-nombrDeUsuario
-likes: []
-createdAt: Date.now()

En mi componente Post:
1. lo pasamos a class
2. le agregamos dos estados:
    -likes: 0 (numero) // EJ: db.likes.length
    -liked: true/false (define si yo ya le di like al post)

let washingtonRef= db.collection("cities").doc(<ACA VA EL ID DEL POSR>);
return washingtonRef.update({ //aca actualizo la referencia del documento. 
regions: 'region_C' **ASI NO PISO LOS DATOS ANTERIORES**
regions: firebase.firestore.FieldValue.arrayUnion("region_c")
regions: firebase.firestore.FieldValue.arrayRemove("region_c")  (para removerlo)
})
.then(()=> {
    console.log("Document successfully updated!);
})
.catch((error)=>{
    console.error("Error updating document: " , error);
});




