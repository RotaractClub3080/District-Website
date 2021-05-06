import team from './list'


function checkPassword(password, clubId){

    if((team[parseInt(clubId) - 1]).password === password){
        return true
    }

    return false
}

export default checkPassword