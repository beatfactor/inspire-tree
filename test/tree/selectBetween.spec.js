'use strict';

describe('Tree.selectBetween', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.createTreeContainer();

        // Query DOM
        $tree = $('.tree');

        // Create tree
        tree = new InspireTree({
            target: $tree,
            data: [{
                text: 'A',
                id: 1
            }, {
                text: 'B',
                id: 2
            }, {
                text: 'C',
                id: 3
            }]
        });
    });

    it('exists', function() {
        expect(tree.selectBetween).to.be.a('function');
    });

    it('selects between a start/end node', function() {
        tree.node(1).hide();
        tree.selectBetween(tree.node(1), tree.node(3));

        expect(tree.node(1).selected()).to.be.false;
        expect(tree.node(2).selected()).to.be.true;
        expect(tree.node(3).selected()).to.be.false;
    });

    after(helpers.clearDOM);
});
