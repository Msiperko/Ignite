
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
const popular_games = `games?key=f1c2948c382441a3bda2d2b6b61f605a&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=f1c2948c382441a3bda2d2b6b61f605a&dates=${currentDate},${nextYear}&ordering+-added&page_size=10`
const newGames = `games?key=f1c2948c382441a3bda2d2b6b61f605a&dates=${lastYear},${currentDate}&ordering+-released&page_size=10`

export const popularGamesURL  = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL      = () => `${base_url}${newGames}`
// Game Details
export const gameDetailsURL   = (game_id) => `${base_url}games/${game_id}.json?&key=f1c2948c382441a3bda2d2b6b61f605a`
//Game Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&key=f1c2948c382441a3bda2d2b6b61f605a`


// f1c2948c382441a3bda2d2b6b61f605a