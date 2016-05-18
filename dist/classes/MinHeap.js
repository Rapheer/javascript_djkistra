var MinHeap = (function() {
        var MinHeap = function () {
            this.min = null;
            this.roots = [];
            this.nodes = [];
        }

        MinHeap.prototype.shift = function()
        {
            var minNode = this.min;

            // Current min is null or no more after it
            if (minNode == null || this.roots.length < 1) {
                this.min = null;
                return minNode
            }

            // Remove it
            this.remove(minNode);

            // Consolidate
            if (this.roots.length > 50) {
                this.consolidate();
            }

            // Get next min
            var lowestDistance = Infinity,
                length = this.roots.length;

            for (var i = 0; i < length; i++) {
                var node = this.roots[i],
                    distance = this.getDistance(node);

                if (distance < lowestDistance) {
                    lowestDistance = distance;
                    this.min = node;
                }
            }

            return minNode;
        }

        MinHeap.prototype.consolidate = function()
        {
            // Consolidate
            var depths = [ [], [], [], [], [], [], [] ],
                maxDepth = depths.length - 1, // 0-index
                removeFromRoots = [];

            // Populate depths array
            var length = this.roots.length;
            for (var i = 0; i < length; i++) {
                var node = this.roots[i],
                depth = this.nodes[node].depth;

                if (depth < maxDepth) {
                    depths[depth].push(node);
                }
            }

            // Consolidate
            for (var depth = 0; depth <= maxDepth; depth++) {
                while (depths[depth].length > 1) {

                    var first = depths[depth].shift(),
                        second = depths[depth].shift(),
                        newDepth = depth + 1,
                        pos = -1;

                    if (this.nodes[first].distance < this.nodes[second].distance) {
                        this.nodes[first].depth = newDepth;
                        this.nodes[first].children.push(second);
                        this.nodes[second].parent = first;

                        if (newDepth <= maxDepth) {
                            depths[newDepth].push(first);
                        }

                        // Find position in roots where adopted node is
                        pos = this.roots.indexOf(second);

                    } else {
                        this.nodes[second].depth = newDepth;
                        this.nodes[second].children.push(first);
                        this.nodes[first].parent = second;

                        if (newDepth <= maxDepth) {
                            depths[newDepth].push(second);
                        }

                        // Find position in roots where adopted node is
                        pos = this.roots.indexOf(first);
                    }

                    // Remove roots that have been made children
                    if (pos > -1) {
                        this.roots.splice(pos, 1);
                    }
                }
            }
        }

        MinHeap.prototype.add = function(node, distance)
        {
            // Add the node
            this.nodes[node] = {
                node: node,
                distance: distance,
                depth: 0,
                parent: null,
                children: []
            };

            // Is it the minimum?
            if (!this.min || distance < this.nodes[this.min].distance) {
                this.min = node;
            }

            // Other stuff
            this.roots.push(node);
        }

        MinHeap.prototype.update = function(node, distance)
        {
            this.remove(node);
            this.add(node, distance);
        }

        MinHeap.prototype.remove = function(node)
        {
            if (!this.nodes[node]) {
                return;
            }

            // Move children to be children of the parent
            var numChildren = this.nodes[node].children.length;
            if (numChildren > 0) {
                for (var i = 0; i < numChildren; i++) {
                    var child = this.nodes[node].children[i];
                    this.nodes[child].parent = this.nodes[node].parent;

                    // No parent, then add to roots
                    if (this.nodes[child].parent == null) {
                        this.roots.push(child);
                    }
                }
            }

            var parent = this.nodes[node].parent;

            // Root, so remove from roots
            if (parent == null) {
                var pos = this.roots.indexOf(node);
                if (pos > -1) {
                    this.roots.splice(pos, 1);
                }
            } else {
                // Go up the parents and decrease their depth
                while (parent) {
                    this.nodes[parent].depth--;
                    parent = this.nodes[parent].parent
                }
            }
        }

        MinHeap.prototype.getDistance = function(node)
        {
            if (this.nodes[node]) {
                return this.nodes[node].distance;
            }
            return Infinity;
        }

        return MinHeap;
    })();