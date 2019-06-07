
class Teams {

  static getAllTeams() {
    let sql =
      'SELECT teams.id, teams.team_name, divisions.division_name FROM teams LEFT JOIN ' +
      'divisions ON teams.div_id = divisions.id ORDER BY divisions.division_name, teams.team_name';
    return sql;
  }

  static addTeam() {
    return 'INSERT INTO teams (team_name, div_id) VALUES (?,?)';
  }

  static getOneTeam() {
    return 'SELECT id, team_name, div_id FROM teams WHERE id=?';
  }

  static updateTeam() {
    return 'UPDATE teams SET team_name=?, div_id=? WHERE id=?';
  }

  static deleteTeam() {
    return 'DELETE FROM teams WHERE id=?';
  }
}

module.exports = Teams;