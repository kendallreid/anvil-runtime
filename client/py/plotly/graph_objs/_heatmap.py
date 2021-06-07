
from anvil.util import WrappedObject, WrappedList
from anvil.server import serializable_type


@serializable_type
class Heatmap(WrappedObject):
    _name = "Heatmap"
    _module = "plotly.graph_objs._heatmap"

    def __init__(self, d=None, **kwargs):
        WrappedObject.__init__(self, d, type='heatmap', **kwargs)
