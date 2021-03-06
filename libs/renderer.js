var activePrimitives = [];
var activeMesh = null;

var Renderer = (function(THREE) {
    function Primitive() {
        this.vertices = [];
        this.color = 0x000000;
    }

    function _addPrimitive(p) {
        activePrimitives.push(p);
    }

    function constructGeometry() {
        var positions = [];
        var colors = [];
        var indices = [];

        // Collect all primitives into geometry buffers.
        var i, j;
        var indexOffset = 0;
        for (i = 0; i < activePrimitives.length; i++) {
            var p = activePrimitives[i];

            // Vertices/colors.
            for (j = 0; j < p.vertices.length; j++) {
                var v = p.vertices[j];
                positions.push(v.x, v.y, v.z);
                colors.push(p.color & 0xFF0000, p.color & 0xFF00, p.color & 0xFF);
            }

            // Indices.
            for (j = 0; j < p.vertices.length - 1; j++) {
                indices.push(indexOffset + j, indexOffset + j + 1);
            }
            indexOffset += p.vertices.length;
        }

        // Construct geometry.
        indices = new Uint16Array(indices);
        positions = new Float32Array(positions);
        colors = new Float32Array(colors);

        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute('index', new THREE.BufferAttribute(indices, 1));
        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.computeBoundingSphere();
        return geometry;
    }

    function _update(scene) {
        if (activeMesh !== null) {
            scene.remove(activeMesh);
            activeMesh = null;
        }

        if (activePrimitives.length === 0) {
            return;
        }

        // Create geometry and add to scene.
        var geometry = constructGeometry();
        var material = new THREE.LineBasicMaterial({ vertexColors: true });
        activeMesh = new THREE.Line(geometry, material, THREE.LinePieces);
        scene.add(activeMesh);

        // Clear primitives from this frame.
        activePrimitives = [];
    }


    return {
        Primitive: Primitive,
        addPrimitive: _addPrimitive,
        update: _update
    };
})(THREE);