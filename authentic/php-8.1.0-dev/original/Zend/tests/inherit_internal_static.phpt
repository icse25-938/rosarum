--TEST--
Inherit internal static property into userland class
--SKIPIF--
<?php if (!extension_loaded('zend_test')) die('skip requires zend_test'); ?>
--FILE--
<?php

class Test extends _ZendTestClass {
}

var_dump(Test::$_StaticProp);
_ZendTestClass::$_StaticProp = 42;
var_dump(Test::$_StaticProp);

?>
--EXPECT--
NULL
int(42)
