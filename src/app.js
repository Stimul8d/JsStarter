import $ from 'jquery';

class TestClass {
    constructor() {
        $(() => $('#target').append('<p>somethinng</p>'));
    }
}

var z = new TestClass();