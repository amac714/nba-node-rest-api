
class Positions {

  static getPlayerPositions() {
    const sql =
      'SELECT player_position.player_id, player_position.position_id, positions.position_name, players.player_fname, players.player_lname FROM player_position ' +
      'INNER JOIN positions ON player_position.position_id = positions.id ' +
      'INNER JOIN players ON player_position.player_id = players.id ORDER BY positions.id, players.player_fname';
    return sql;
  }

  // add relationship b/w player and position
  static addPlayerPosition() {
    const sql =
      'INSERT INTO player_position (player_id, position_id) VALUES (?,?)';
    return sql;
  }

  static deletePlayerPosition() {
    const sql =
      'DELETE FROM player_position WHERE player_id=? AND position_id=?';
    return sql;
  }

  static displayPositions() {
    return 'SELECT id, position_name FROM positions ORDER BY id';
  }

  static createPosition() {
    return 'INSERT INTO positions (position_name) VALUES (?)';
  }

  static deletePosition() {
    return 'DELETE FROM positions WHERE id=?';
  }
}

module.exports = Positions;