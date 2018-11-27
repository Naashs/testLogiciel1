// Test initial
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

// Test nombre pair
QUnit.test( "NbPair()", function( assert ) {
  assert.expect( 6 );

  assert.ok( NbPair(4), "pair");
  assert.notOk(NbPair(11), "imair");
  assert.ok(NbPair(8),"impair");
  assert.notOk (NbPair(5), "impair");
  assert.deepEqual(NbPair(6), true, "pair");
  assert.notDeepEqual(NbPair(7), true, "impair");
});

// Test concaténation
QUnit.test( "Concatenation", function( assert ) {
  assert.expect( 1 );
  
  assert.ok(Concatenation("Jean")=="Bonjour Jean", "Pass");
});