module.exports.friends=['Aidai','Jamka','Bermet','Nursultan']

module.exports.informationOfFr = {
    aidai : ["name: Aidai", "age: 25", "hobby: make coffee and cocktails", "music: music lover"],
    jamka : ["name: Jamka", "age: 23", "hobby: Chinise language", "music: Jah Khalib and Sam Smith"],
    bermet : ["name: Bermet", "age: 25", "hobby: make up and taking a photo", "music : Billie Eilish"],
    nursultan : ["name: Nursultan", "age: 23", "hobby: playing games and football", "music: Drake"],
    
}

module.exports.nameOfFriend = (name) => {
    if (this.friends[0] == name) {
        return this.informationOfFr.aidai
    } else if (this.friends[1] == name) {
        return this.informationOfFr.jamka
    } else if (this.friends[2] == name) {
        return this.informationOfFr.bermet
    }  else if (this.friends[3] == name) {
        return this.informationOfFr.nursultan
    
    }
}

 
