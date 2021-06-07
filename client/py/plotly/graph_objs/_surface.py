
from anvil.util import WrappedObject, WrappedList
from anvil.server import serializable_type


@serializable_type
class Surface(WrappedObject):
    _name = "Surface"
    _module = "plotly.graph_objs._surface"

    def __init__(self, d=None, **kwargs):
        WrappedObject.__init__(self, d, type='surface', **kwargs)
