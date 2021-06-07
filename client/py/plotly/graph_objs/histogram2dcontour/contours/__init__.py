
from anvil.util import WrappedObject, WrappedList
from anvil.server import serializable_type


@serializable_type
class Impliededits(WrappedObject):
    _name = "Impliededits"
    _module = "plotly.graph_objs.histogram2dcontour.contours"

@serializable_type
class Labelfont(WrappedObject):
    _name = "Labelfont"
    _module = "plotly.graph_objs.histogram2dcontour.contours"


__all__ = [
    'Impliededits',
    'Labelfont',
]