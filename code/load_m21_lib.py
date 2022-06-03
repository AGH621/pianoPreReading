#!/usr/bin/env /usr/local/bin/python3
"""
Created by Jim Kaubisch on 2022-06-02.
"""
from pprint import pprint

import music21 as m21_lib

from ppr_globals import config


#
# --------------------------------------------------------------
#

def get_local_corpus(corpus_name=config["ppr_m21_defaults"]['local_corpus_name'], 
                     corpus_path=config["ppr_m21_defaults"]["local_corpus_path"], 
                     cache_meta=False,
                     verbose=True,
                     debug=False):
    """
    """
    debug = True

    # Out of date local corpora? 
    # e.g.
    if not cache_meta:
        m21_lib.corpus.corpora.LocalCorpus(config["ppr_m21_defaults"]['local_corpus_name']).delete()

    # Create our local corpus
    #
    pprLocalCorpus = m21_lib.corpus.corpora.LocalCorpus(corpus_name)
    pprLocalCorpus.addPath(corpus_path)
    pprLocalCorpus.save()

    if cache_meta:
        print('get_local_corpus: cache_meta')
        m21.corpus.cacheMetadata(verbose=verbose)
    
    if debug:
        print()
        print(f'\npprLocalCorpus = {m21_lib.corpus.manager.listLocalCorporaNames(pprLocalCorpus)}')
        print(f'pprLocalCorpus.directoryPaths  : {pprLocalCorpus.directoryPaths}')
        print(f'pprLocalCorpus.existsInSettings: {pprLocalCorpus.existsInSettings}')
        print(f'pprLocalCorpus.metadataBundle  : {pprLocalCorpus.metadataBundle}')

    return pprLocalCorpus



#
# --------------------------------------------------------------
#

if __name__ == '__main__':
    pass
            
            
    
    
    

    
    
    
    
    
    
    