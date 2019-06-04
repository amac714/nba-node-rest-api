
// utility class for queries needed for Players table
class Players {

  static getAddPlayerSQL() {
    return 'INSERT INTO players (player_fname, player_lname, age, height, team_id) VALUES (?,?,?,?,?)';
  }

  static getAllPlayers() {
    let sql =
      'SELECT players.id, players.player_fname, players.player_lname, players.age, players.height, teams.team_name FROM players ' +
      'LEFT JOIN teams ON players.team_id = teams.id ORDER BY teams.id, players.player_fname';
    return sql;
  }

  static getOnePlayer() {
    return 'SELECT id, player_fname, player_lname, age, height, team_id FROM players WHERE id=?';
  }

  static deletePlayer() {
    return 'DELETE FROM players WHERE id=?';
  }

  static updatePlayer() {
    return 'UPDATE players SET player_fname=?, player_lname=?, age=?, height=?, team_id=? WHERE id=?';
  }

  static searchForPlayer() {
    let sql =
      'SELECT players.player_fname, players.player_lname, players.height, players.age, teams.team_name FROM players ' +
      'LEFT JOIN teams ON players.team_id = teams.id WHERE players.player_fname=? AND players.player_lname=?';
    return sql;
  }
}

module.exports = Players;
