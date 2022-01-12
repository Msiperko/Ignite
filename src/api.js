require("dotenv").config();

//base url
const base_url = 'https://api.rawg.io/api/'

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day <10) {
        return `0${day}`
    } else {
        return day
    }
}

// Current day/month/year
const currentYear   = new Date().getFullYear(),
      currentMonth  = getCurrentMonth(),
      currentDay    = getCurrentDay(),
      currentDate   = `${currentYear}-${currentMonth}-${currentDay}`,
      lastYear      = `${currentYear - 1}-${currentMonth}-${currentDay}`,
      nextYear      = `${currentYear + 1}-${currentMonth}-${currentDay}`
          

//Popular games
const popular_games = `games?key=REACT_APP_KEY&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`