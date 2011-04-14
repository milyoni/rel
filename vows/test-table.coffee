vows = require 'vows'
assert = require 'assert'

Table = require '../lib/table'
SelectManager = require '../lib/select-manager'
u = require 'underscore'

tests = vows.describe('Querying stuff').addBatch
  'A table':
    topic: ->
      new Table('users')

    'it has a from method': (table) ->
      assert.isNotNull table.from('user')

    'it can project things': (table) ->
      assert.isNotNull table.project(new require('../lib/nodes/sql-literal')('*'))

    'it should return sql': (table) ->
      console.log table.project(new require('../lib/nodes/sql-literal')('*')).toSql()

tests.export module
