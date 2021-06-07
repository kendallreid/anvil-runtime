
from anvil.util import WrappedObject, WrappedList
from anvil.server import serializable_type


@serializable_type
class Scatter(WrappedObject):
    _name = "Scatter"
    _module = "plotly.graph_objs._scatter"

    def __init__(self, d=None, **kwargs):
        WrappedObject.__init__(self, d, type='scatter', **kwargs)
