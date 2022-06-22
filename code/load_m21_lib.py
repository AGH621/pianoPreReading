#!/usr/bin/env /usr/local/bin/python3
"""
Created by Jim Kaubisch on 2022-06-02.
"""
from pprint import pprint

import music21 as m21_lib

from ppr_globals import config


local_corpus_name ='None'
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
    #debug = True

    print(f'get_local_corpus: local corpus name = {local_corpus_name}')

    # Out of date local corpora? 
    # e.g.
    if not cache_meta:
        m21_lib.corpus.corpora.LocalCorpus(config["ppr_m21_defaults"]['local_corpus_name']).delete()
        m21_lib.corpus.corpora.LocalCorpus('ppr_test_corpus').delete()
        #m21_lib.corpus.corpora.LocalCorpus.rebuildMetadataCache(useMultiprocessing=True, verbose=True)

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

    return pprLocalCorpus, corpus_name



#
# --------------------------------------------------------------
#

if __name__ == '__main__':
    pass
            
            
    
    
    

    
    
    
    
    
    
    