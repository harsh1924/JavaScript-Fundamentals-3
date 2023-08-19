let userMap = new Map();
userMap.set("name", "Harsh");
userMap.set("age", 22);
userMap.set("email", "harsh@gmail.com");
console.log(userMap);
//OUTPUT: Map { 'name' => 'Harsh', 'age' => 22, 'email' => '<EMAIL>' }

userMap.set("age", 23); // Value Updated
console.log(userMap);
// OUTPUT : Map {'name'=>"Harsh",'age'=>23,'email'=>'<EMAIL>'}

userMap.delete("email"); // Key Deleted
console.log(userMap) ;
// Output : Map{'name'=>"Harsh",'age'=>23}